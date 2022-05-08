import React from 'react'
import { combineReducers } from 'redux';
import { MatchReducer } from './MatchReducer';

const reducers = combineReducers({
    MatchReducer: MatchReducer
});

export default reducers;