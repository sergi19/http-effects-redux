import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsuarioService } from "src/app/services/usuario.service";
import * as userActions from '../actions';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from "rxjs/operators";

@Injectable()
export class UserEffects {
    
    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.LOAD_USER),
        mergeMap(action => this.userService.getUserById(action['id'])
            .pipe(
                map(user => userActions.LOAD_USER_SUCCESS({user: user})),
                catchError(error => of(userActions.LOAD_USER_FAIL({error: error}))),
            )
        )
    ))

    constructor(
        private actions$: Actions,
        public userService: UsuarioService
    ) {}

}