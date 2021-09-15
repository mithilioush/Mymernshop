export const addCartItem = (cartItems, cartItemToAdd) => {
    const extingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (extingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ))
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
    const extingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (extingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    if (extingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        ))
    }
}