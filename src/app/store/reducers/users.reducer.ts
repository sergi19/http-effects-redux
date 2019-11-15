import * as fromUsers from '../actions';
import { Usuario } from 'src/app/models/usuario.model';
import { createReducer, on, Action } from '@ngrx/store';
import { Error } from 'src/app/models/error.model';

export interface UsersState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: Error
}

const initialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const reducer = createReducer(
    initialState,
    on(fromUsers.LOAD_USERS, state => ({...state, loading: true, error: null})),
    on(fromUsers.LOAD_USERS_SUCCESS, (state, {users}) => (
        {
            ...state,
            users: [...users],
            loading: false,
            loaded: true
        }
    )),
    on(fromUsers.LOAD_USERS_FAIL, (state, {error}) => (
        {
            ...state,
            loading: false,
            loaded: false,
            error: {
                status: error.status,
                message: error.message,
                url: error.url
            }
        }
    ))
);

export function usersReducer(state: UsersState, action: Action) {
    return reducer(state, action);
}
