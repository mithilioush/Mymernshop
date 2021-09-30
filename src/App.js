import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import setCurrentUser from './redux/user/user.action'
import { auth, createUserProfileDoc } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user-selector';

import SignIn from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './header/header.component';
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shoppage/shopPage.component";
import CheckOut from './pages/checkout/checkoutpage.component';


import './App.css';

class App extends React.Component {


  unsubscribe = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot(snaphhot => {
          setCurrentUser({
            id: snaphhot.id,
            ...snaphhot.data()
          })
        })
      }
      setCurrentUser(userAuth);
      // addCollectionAndDocument('collections', collectionArray.map(({ title, items }) => ({ title, items })));

    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignIn />)} />
          <Route exact path='/checkout' component={CheckOut} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispacthToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispacthToProps)(App);
