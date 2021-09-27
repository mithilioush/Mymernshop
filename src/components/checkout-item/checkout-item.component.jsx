import React from 'react'
import { connect } from 'react-redux';

import { clearItemFromCart, removeItem, addItems } from '../../redux/cart/cart.action'


import './checkout-item.style.scss'

const CheckoutItem = ({ item, clearItem, removeItem, addItems }) => {
    const { imageUrl, name, price, quantity, } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(item)} >&#10094;</div>
                {quantity}
                <div className='arrow' onClick={() => addItems(item)}> &#10095; </div>
            </span>
            <span className='price'>₹{price}</span>
            <span className='remove-button' onClick={() => clearItem(item)} >&#10005;</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItems: item => dispatch(addItems(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);