import { combineReducers } from 'redux';

import { cartReducer } from './cart/reducer';
import { filterReducer } from './filters/reducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    filters: filterReducer
});

export default rootReducer;