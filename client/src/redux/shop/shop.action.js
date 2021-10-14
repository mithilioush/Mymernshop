import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import shoepActionType from "./shop.type";

export const fetchCollectionsStart = () => ({
    type: shoepActionType.FETCH_COLLECTION_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shoepActionType.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: shoepActionType.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const clearCart = () => ({
    type: shoepActionType.CLEAR_CART,
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(err => dispatch(fetchCollectionsFailure(err.message)));
    }
}

// export default updateCollections;