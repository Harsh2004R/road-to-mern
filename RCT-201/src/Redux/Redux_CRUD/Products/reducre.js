import { GET_SUCCESS, POST_SUCCESS, FAILURE, REQUEST, DELETE_PRODUCT, PATCH_PRODUCT } from "./actionTypes"

const productState = {
    isLoading: false,
    isError: null,
    product: []
}

export const reducer = (state = productState, { type, payload }) => {
    switch (type) {
        case REQUEST: return { ...state, isLoading: true }
        case FAILURE: return { ...state, isError: payload }
        case GET_SUCCESS: return { ...state, isLoading: false, product: payload }
        case POST_SUCCESS: return { ...state, isLoading: false, }
        case DELETE_PRODUCT: return { ...state, isLoading: false }
        case PATCH_PRODUCT: return { ...state, isLoading: false }
        default: {
            return state
        }
    }
}





