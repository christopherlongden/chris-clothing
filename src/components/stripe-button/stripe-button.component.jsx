import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishable = 'pk_test_UJQs7zJIzntPN1pXdLRBBIIq00tzxVN5PJ';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful!")
    }
    
    return (
        <StripeCheckout
            label="Pay Now"
            name="Chris Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishable}
        />
    )
}

export default StripeCheckoutButton;