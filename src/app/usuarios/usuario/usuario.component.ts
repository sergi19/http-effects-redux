import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as userActions from '../../store/actions';
import { Usuario } from 'src/app/models/usuario.model';
import { Error } from 'src/app/models/error.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  id: string;
  user: Usuario;
  loading: boolean;
  error: Error;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params.id;
        this.store.dispatch(userActions.LOAD_USER({id: this.id}));
        this.store.select('userState')
          .subscribe(userState => {
            this.user = userState.user;
            this.loading = userState.loading;
            this.error = userState.error;
          });
      });
  }

}
