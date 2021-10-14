import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.component';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price;
    const publicKey = 'pk_test_51JeDyHSHKsKs2hOfrGxvpkvI2HYkxATFM6eUGV9JnDkpfglB0AfSMNhZymaPJI6vz3erbxLkQlplwHRNhC5YlCtl00gUKbMd9K'

    const onToken = async token => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'api/payment',
                data: {
                    amount: priceForStripe,
                    token
                }
            })
            console.log(res.data);
            if (res.data.status === 'success') {
                console.log(res.data);
                alert('Payment Successfull.')
            }
        } catch (error) {
            console.log('Error: ', error.message);
            console.log(JSON.parse(error));
            alert('Payment failed.')
        }
    }

    return (
        <StripeCheckout
            label='Buy now'
            name='Clothing App Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $ ${priceForStripe}`}
            amount={priceForStripe}
            currency='USD'
            country="US"
            panelLabel="Pay now"
            token={(t) => onToken(t)}
            stripeKey={publicKey}
        >
            <CustomButton inverted="true" >Buy now</CustomButton>
        </StripeCheckout>
    )
}

export default StripeCheckoutButton;