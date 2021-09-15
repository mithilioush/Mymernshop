import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../firebase/firebase.utils';
import { ReactComponent as Logo } from './../assets/logo.svg'

import { selectCurrentUser } from '../redux/user/user-selector';
import { selectCartHidden } from '../redux/cart/cart-selector';

import CartIcon from '../components/cart-icon/cart-icon.component';
import CartDropdown from '../components/cart-dropdown/cart-dropdown.component';


import './header.style.scss';


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            <Link className="option" to='/about'>ABOUT</Link>
            <Link exact className="option" to='/checkout'>ABOUT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SING OUT</div>
                    :
                    <Link className="option" to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />

        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);