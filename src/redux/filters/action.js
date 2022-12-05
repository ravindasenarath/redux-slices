import { SET_PHRASE } from './constants'

const setPhrase = (phrase) => {
    return {
        type: SET_PHRASE,
        payload: {
            phrase
        }
    }
}

export const filterActions = {
    setPhrase,
}