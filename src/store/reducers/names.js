import { NEW_NAME } from '../actions/actionTypes'

const initialState = {
    name: "Teste",
}

export default function (state = initialState, action) {

    switch (action.type) {
        case NEW_NAME:
            return {
                ...state,
                min: action.payload
            }
        default:
            return state
    }
}