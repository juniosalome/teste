import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  getTodosUsuarios() {
    return new Promise((resolve, reject) => {
      this.http.get('/usuario')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  mostrarUsuario(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/usuario/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  salvarUsuario(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/usuario', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  atualizarUsuario(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/usuario/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deletarUsuario(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/usuario/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}