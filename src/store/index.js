import { legacy_createStore as createStore} from 'redux'

const initialState = {
    counter: 0,
    isShow: true
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("increment"):
            return {
                ...state,
                counter: state.counter + 1
            }
        case ("decrement"):
            return {
                ...state,
                counter: state.counter - 1
            }
        case ("increased by 5"):
            return {
                ...state,
                counter: state.counter + action.amount
            }
        case ("toggle show"):
            return {
                ...state,
                isShow: !state.isShow
            }
        default:
            return {
                ...state
            }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;
