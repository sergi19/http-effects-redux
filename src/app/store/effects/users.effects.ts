import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions';
import { of } from 'rxjs';
import { mergeMap, map, catchError  } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";

@Injectable()
export class UsersEffects {
    
    
    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(usersActions.LOAD_USERS),
        mergeMap(() => this.userService.getUsers()
            .pipe(
                map(users => usersActions.LOAD_USERS_SUCCESS({users: users})),
                catchError(error => of(usersActions.LOAD_USERS_FAIL({error: error})))
            )
        )
    ));
            
    constructor(
        private actions$: Actions,
        public userService: UsuarioService
    ) {}
}
