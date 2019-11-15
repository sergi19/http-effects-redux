import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

// NgRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { appEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(appEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
