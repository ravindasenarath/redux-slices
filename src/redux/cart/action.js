import { ADD_ITEM_TO_CART } from './constants'
import { REMOVE_ITEM_FROM_CART } from './constants'

const addItemToCart = (item, count) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: {
            item,
            count
        }
    }
}

const removeItemFromCart = (itemId) => { 
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: {
            itemId
        }
    }
}

export const cartActions = {
    addItemToCart,
    removeItemFromCart
}