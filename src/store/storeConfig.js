import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import numbersReducer from './reducers/numbers'
import namesReducer from './reducers/names'

const reducers = combineReducers({
    numbers: numbersReducer,
    names: namesReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig