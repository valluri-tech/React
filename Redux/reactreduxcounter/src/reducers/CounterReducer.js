const initialState = {
    value: 0
}

export default function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return { ...state, value: state.value + 1 }
            //break;
        case 'DECREMENT_COUNTER':
            return { ...state, value: state.value - 1 }
            //break;
        default:
            return state;
    }
}
