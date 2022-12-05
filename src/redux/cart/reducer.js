import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './constants'

const initialState = {
    items: []
};

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload.item]
            }
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                items: [...state.items.filter(item => item.id !== action.payload.itemId)]
            }
        default:
            return state;
    }
}