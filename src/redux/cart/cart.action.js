import { cartActionType } from "./cart.type";

export const toggleCartHidden = () => ({
    type: cartActionType.TOGGLE_CART_HIDDEN
})

export const addItems = (item) => ({
    type: cartActionType.ADD_ITEM,
    payload: item
})
