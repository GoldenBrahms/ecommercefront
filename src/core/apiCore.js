import { API } from "../config";


export const getProduct = () => {
    return fetch(`${API}/product`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}
export const getBraintreeClientToken = (userId, token) => {
    return fetch(`${API}/braintree/getToken/${userId}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}
export const getBraintreeClientToken1 = (userInviteId, token) => {
    return fetch(`${API}/braintree/getToken1/${userInviteId}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const processPayment = (userId, token, paymentData) => {
    return fetch(`${API}/braintree/getToken/${userId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}
export const processPayment1 = (userInviteId, token, paymentData) => {
    return fetch(`${API}/braintree/getToken1/${userInviteId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const createOrder = (userId, token, createOrderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: createOrderData})
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const createInviteOrder = (userInviteId, token, createOrderData) => {
    return fetch(`${API}/order/createInvite/${userInviteId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: createOrderData})
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const read = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const itemTotal = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')).length;
        }
    }
    return 0;
};
export const cartExist = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            return true;
        }
    }
    return 0;
};
