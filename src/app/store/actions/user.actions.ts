import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/models/usuario.model";
import { Error } from "src/app/models/error.model";

export const LOAD_USER = createAction('[User] Load user', props<{id: string}>());
export const LOAD_USER_SUCCESS = createAction('[User] Load user success', props<{user: Usuario}>());
export const LOAD_USER_FAIL = createAction('[User] Load user fail', props<{error: Error}>());