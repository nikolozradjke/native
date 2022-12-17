export const loginReducer = (state = 0, action) => {
    switch(action.type){
        case "LOGIN":
            return state = action.payload;
        default:
            return state;
    }
}