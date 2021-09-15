import { cartActionType } from "./cart.type"
import { addCartItem } from "./cart.utility"

const INTIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case cartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}
export default cartReducer;