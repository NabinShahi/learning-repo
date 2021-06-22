import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionTypes"

const addToCart = (payload) => {
    return {
        type: ADD_TO_BASKET,
        payload: payload
    }
}

const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_BASKET,
        payload: payload
    }
}

export {
    addToCart,
    removeFromCart
};