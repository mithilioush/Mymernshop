import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../redux/user/user-selector';
import { selectCartHidden } from '../redux/cart/cart-selector';
import { signOutStart } from '../redux/user/user.action';

import CartIcon from '../components/cart-icon/cart-icon.component';
import CartDropdown from '../components/cart-dropdown/cart-dropdown.component';



import { ReactComponent as Logo } from './../assets/logo.svg'
import './header.style.scss';


const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            <Link className="option" to='/about'>ABOUT</Link>
            <Link className="option" to='/checkout'>ABOUT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => signOutStart()}>SING OUT</div>
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
});
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);