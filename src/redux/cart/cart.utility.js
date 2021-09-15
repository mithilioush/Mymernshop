export const addCartItem = (cartItems, cartItemToAdd) => {
    const extingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (extingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ))
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}