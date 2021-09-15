import React from 'react'


import './cart-item.style.scss'

function CartItem({ item: { name, price, imageUrl, quantity } }) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" className="item" />
            <div className="item-details">
                <span className='name'>{name}</span>
                <span className='price'>{price}x ${quantity}</span>
            </div>
        </div>
    )
}

export default CartItem;
