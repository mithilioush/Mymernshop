import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemTotal } from '../../redux/cart/cart-selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


import './checkout.style.scss';

function CheckOut({ items, total }) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                items.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
            }
            <div className='total'>
                <span>TOTAL : ₹{total}</span>
            </div>
            <StripeCheckoutButton price={total} />

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectCartItemTotal
})

export default connect(mapStateToProps)(CheckOut);
