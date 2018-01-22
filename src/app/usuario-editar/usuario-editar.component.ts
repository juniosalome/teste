import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

usuario = {};

  constructor(private usuarioService: UsuarioService, 
  private router: Router, 
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUsuario(this.route.snapshot.params['id']);
  }

  getUsuario(id) {
    this.usuarioService.mostrarUsuario(id).then((res) => {
      this.usuario = res;
      console.log(this.usuario);
    }, (err) => {
      console.log(err);
    });
  }

  atualizarUsuario(id) {
    this.usuarioService.atualizarUsuario(id, this.usuario).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/usuario-detalhe', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
