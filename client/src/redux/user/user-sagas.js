import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionType from './user.action.type';
import { auth, googleProvider, createUserProfileDoc, getCurrentUser } from '../../firebase/firebase.utils';
import { googleSignInFailuer, googleSignInSuccess, emailSignInSuccess, emailSignInFailuer, signInSuccess, signInFailure, signOutSuccess, signOutFailure } from './user.action';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDoc,
            userAuth,
            additionalData
        );
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(emailSignInFailuer(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        console.log(user);
        const userRef = yield call(createUserProfileDoc, user);
        const shnapShot = yield userRef.get();
        yield put(googleSignInSuccess({ id: shnapShot.id, ...shnapShot.data() }))
    } catch (error) {
        yield put(googleSignInFailuer(error))
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(userActionType.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDoc, user);
        const shnapShot = yield userRef.get();
        yield put(emailSignInSuccess({ id: shnapShot.id, ...shnapShot.data() }))
    } catch (error) {
        yield put(emailSignInFailuer(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionType.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionType.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        return put(signOutFailure())
    }
}

export function* onSignOutStart() {
    yield takeLatest(userActionType.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOutStart)
    ]);
}