import { createStore } from 'redux'

const initialState = {
    fiat: "USD",
    fiatAmt: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'amountUpdate':
            return {
                ...state,
                fiatAmt: action.payload
            }
        case 'fiatSelect':
            return {
                ...state,
                fiat: action.payload
            }
        default:
            return state;

    }
}

export const store = createStore(reducer)



