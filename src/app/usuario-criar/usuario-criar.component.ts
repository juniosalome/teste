import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-usuario-criar',
  templateUrl: './usuario-criar.component.html',
  styleUrls: ['./usuario-criar.component.css']
})
export class UsuarioCriarComponent implements OnInit {

  usuario = {};

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  salvarUsuario() {
    this.usuarioService.salvarUsuario(this.usuario).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/usuario-detalhe', id]);
    }, (err) => {
      console.log(err);
    });
  }

  

}
