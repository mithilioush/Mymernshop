import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "./../assets/shoping-bag.svg";
import { selectCartItemCount } from '../../redux/cart/cart-selector'

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shoping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})

const mapDispacheToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispacheToProps)(CartIcon);