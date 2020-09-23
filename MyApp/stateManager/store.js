import {createStore} from 'redux'
import {stateReducer} from './stateReducer'

export const store = createStore(stateReducer);