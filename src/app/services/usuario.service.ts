import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../components/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  buscarUsuario(id: number) {
    return this.http.get("http://localhost:3000/usuario/" + id);
  }

  editarUsuario(usuario: Usuario) {
    return this.http.put("http://localhost:3000/usuario/" + usuario.id, usuario);
  }
}
