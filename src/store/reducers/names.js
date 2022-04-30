import { NEW_NAME } from '../actions/actionTypes'

const initialState = {
    name: "",
}

export default function (state = initialState, action) {

    switch (action.type) {
        case NEW_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}