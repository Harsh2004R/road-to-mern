function counterReducer(state, { type, payload }) {
    switch (type) {
        case "INC": return {
            ...state, counter: state.counter + payload
        }
        case "DEC": return {
            ...state, counter: state.counter + payload
        }
        default: return state;
    }

}
export default counterReducer;