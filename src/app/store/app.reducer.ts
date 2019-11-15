import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    usersState: reducers.UsersState,
    userState: reducers.UserState
}

export const appReducers: ActionReducerMap<AppState> = {
    usersState: reducers.usersReducer,
    userState: reducers.userReducer
}