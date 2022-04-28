import { NEW_NAME } from './actionTypes'

// ACTIONS CREATOR
export function alterName(newName) {
    return {
        type: NEW_NAME,
        payload: newName,
    }
}