import { cartActionType } from "./cart.type"
import { addCartItem, removeCartItem } from "./cart.utility"

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

        case cartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }

        case cartActionType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        case cartActionType.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }


        default:
            return state;
    }
}
export default cartReducer;