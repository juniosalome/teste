import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

usuarios: any;
usuario = {};

  constructor(private usuarioService: UsuarioService,
  private router: Router, 
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUsuarioLista();
  }

  getUsuarioLista() {
    this.usuarioService.getTodosUsuarios().then((res) => {
      this.usuarios = res;
    }, (err) => {
      console.log(err);
    });
  }

  deletarUsuario(id) {
  this.usuarioService.deletarUsuario(id).then((result) => {
    this.router.navigate(['/']);
  }, (err) => {
    console.log(err);
  });
  }

  getUsuario(id) {
    this.usuarioService.mostrarUsuario(id).then((res) => {
      this.usuario = res;
      console.log(this.usuario);
    }, (err) => {
      console.log(err);
    });
  }

}
