import {
    NUM_MIN_ALTERAR,
    NUM_MAX_ALTERAR,
} from './actionTypes'

// ACTIONS CREATOR
export function alterNumberMin(newNumber) {
    return {
        type: NUM_MIN_ALTERAR,
        payload: newNumber,
    }
}

export function alterNumberMax(newNumber) {
    return {
        type: NUM_MAX_ALTERAR,
        payload: newNumber,
    }
}