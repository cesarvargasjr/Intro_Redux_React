import { combineReducers } from 'redux'
import { legacy_createStore as createStore} from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {
        return {
            min: 1,
            max: 100,
        }
    },

    // EXEMPLO DE COMO SERIA COM MAIS DADOS
    names: function(state, action) {
        return [
            "Ana",
            "Cesar",
            "Maria",
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig