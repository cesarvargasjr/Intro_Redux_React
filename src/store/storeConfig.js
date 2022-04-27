import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import numbersReducer from './reducers/numbers'

const reducers = combineReducers({

    numbers: numbersReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig