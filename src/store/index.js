import {combineReducers} from "redux";
import {loginReducer} from "./login/login";
import {CartReducer} from "./cart/cart";

const allReducers = combineReducers({
    login: loginReducer,
    cart: CartReducer
})

export default allReducers;