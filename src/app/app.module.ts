import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario/usuario.component';

import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';

import { UsuarioCriarComponent } from './usuario-criar/usuario-criar.component';

import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';

import { UsuarioService } from './usuario.service';

const appRoutes: Routes = [
  { path: '', 
  redirectTo: 'usuario', 
  pathMatch: 'full' },
  { path: 'usuario', 
  component: UsuarioComponent },
  { path: 'usuario-detalhe/:id',
   component: UsuarioDetalheComponent},
  { path: 'usuario-criar', component: UsuarioCriarComponent },
{ path: 'usuario-editar/:id', 
component: UsuarioEditarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioDetalheComponent,
    UsuarioCriarComponent,
    UsuarioEditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsuarioService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
