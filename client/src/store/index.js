import {createStore, combineReducers, applyMiddleware} from 'redux'
import contactReducer from './reducers/contactReducer'

import thunk from 'redux-thunk'

const reducers = combineReducers({ contactReducer })
const store = createStore(reducers, applyMiddleware(thunk))
export default store
