import { combineReducers } from 'redux';

import { localReducers } from './localReducers'

const rootReducer = combineReducers({
    localReducer: localReducers,
})

export default rootReducer