import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usersActions from '../../store/actions';
import { Error } from 'src/app/models/error.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  users: Usuario[] = [];
  loading: boolean;
  error: Error;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(usersActions.LOAD_USERS());
    this.store.select('usersState')
      .subscribe(usersState => {
        this.loading = usersState.loading;
        this.error = usersState.error;
        this.users = usersState.users;
      })
  }

}
