import {
    NUM_MIN_ALTERAR,
    NUM_MAX_ALTERAR,
} from '../actions/actionTypes'

const initialState = {
    min: 1,
    max: 100
}

export default function (state = initialState, action) {

    switch (action.type) {
        case NUM_MIN_ALTERAR:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERAR:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}