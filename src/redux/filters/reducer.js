import { SET_PHRASE } from './constants'

const initialState = {
    phrase: '',
};

export const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PHRASE:
            return {
                ...state,
                phrase: action.payload.phrase
            }
        default:
            return state;
    }
}