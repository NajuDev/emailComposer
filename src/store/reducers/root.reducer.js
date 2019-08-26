import { combineReducers } from 'redux';

import { appStateReducer } from './app-state.reducer';
import { draftReducer } from './draft.reducer';

export const rootReducer = combineReducers(
    {
        appState: appStateReducer,
        draft: draftReducer
    }
);
