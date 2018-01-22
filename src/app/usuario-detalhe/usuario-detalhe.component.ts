import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from '../usuario.service';



@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})

export class UsuarioDetalheComponent implements OnInit {
 usuario = {};

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService,
  private router: Router) { }

  ngOnInit() {
    this.getDetalheUsuario(this.route.snapshot.params['id']);
  }

  getDetalheUsuario(id) {
    this.usuarioService.mostrarUsuario(id).then((res) => {
      this.usuario = res;
      console.log(this.usuario);
    }, (err) => {
      console.log(err);
    });
  }

  deletarUsuario(id) {
  this.usuarioService.deletarUsuario(id).then((result) => {
    this.router.navigate(['/usuario']);
  }, (err) => {
    console.log(err);
  });
}

}
