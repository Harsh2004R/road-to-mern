import { GET_SUCCESS, POST_SUCCESS, FAILURE, REQUEST } from "./actionTypes"

const productState = {
    // name: "",
    // image: "",
    // price: "",
    // brand: "",
    // category: ""
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
        default: {
            return state
        }
    }
}





