import axios from 'axios';

export const createPaymentIntent = (authtoken) => axios.post(`$(process.env.REACT_STRIPE)/create-payment-intent`, 
{}, 
{
        headers: {
            authtoken,
        },
    })
