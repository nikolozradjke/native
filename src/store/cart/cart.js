const initialState = {
    cart: []
}

export const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD":
            return {
                ... state,
                cart: [... state.cart, action.payload]
            }
        default:
            return state;
    }
}