import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { Error } from 'src/app/models/error.model';

export const LOAD_USERS = createAction('[Users] Load users');
export const LOAD_USERS_SUCCESS = createAction('[Users] Load users success', props<{users: Usuario[]}>());
export const LOAD_USERS_FAIL = createAction('[Users] Load users fail', props<{error: Error}>());
