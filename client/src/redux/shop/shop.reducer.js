import shoepActionType from "./shop.type";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shoepActionType.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case shoepActionType.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case shoepActionType.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case shoepActionType.CLEAR_CART:
            return {
                ...state,
                cart: { cartItems: [], ...state.cart }
            }
        // case shoepActionType.UPDATE_COLLECTIONS:
        //     return {
        //         ...state,
        //         collections: action.payload
        //     }
        default:
            return state;
    }
}

export default shopReducer;