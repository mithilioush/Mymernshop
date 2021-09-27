import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.component';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price;
    const publicKey = 'pk_test_51JeDyHSHKsKs2hOfrGxvpkvI2HYkxATFM6eUGV9JnDkpfglB0AfSMNhZymaPJI6vz3erbxLkQlplwHRNhC5YlCtl00gUKbMd9K';

    const onToken = token => {
        console.log(token);
        alert("Payment sucessfull.")
    }

    return (
        <StripeCheckout
            label='Buy now'
            name='Clothing App Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ₹ ${price}`}
            amount={priceForStripe}
            currency='INR'
            country="US"
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publicKey}
        >
            <CustomButton inverted="true" >Buy now</CustomButton>
        </StripeCheckout>
    )
}

export default StripeCheckoutButton;