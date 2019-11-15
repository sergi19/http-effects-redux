import { Usuario } from "src/app/models/usuario.model";
import { Error } from "src/app/models/error.model";
import { createReducer, on, State, Action } from "@ngrx/store";
import * as fromUser from '../actions';

export interface UserState {
    user: Usuario,
    loaded: boolean,
    loading: boolean,
    error: Error;
}

const initialState: UserState = {
    user: null,
    loaded: false,
    loading: false,
    error: null    
}

const reducer = createReducer(
    initialState,
    on(fromUser.LOAD_USER, state => ({...state, loading: true, error: null})),
    on(fromUser.LOAD_USER_SUCCESS, (state, {user}) => (
        {
            ...state,
            user: {...user},
            loading: false,
            loaded: true
        }
    )),
    on(fromUser.LOAD_USER_FAIL, (state, {error}) => (
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
    )),
);

export function userReducer(state: UserState, action: Action) {
    return reducer(state, action);
}