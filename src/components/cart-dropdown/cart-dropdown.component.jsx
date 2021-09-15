import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { selectCartItems } from "../../redux/cart/cart-selector";
import CartItem from "../cart-items/cart-items.component";
import CustomButton from './../custom-button/custom-button.component'

import './cart-dropdown.style.scss'

const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.length ?
                    cartItems.map(item =>
                        <CartItem key={item.id} item={item} />
                    )
                    : <div className='empty-message'>Your cart is empty</div>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')} inverted> Checkout </CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));