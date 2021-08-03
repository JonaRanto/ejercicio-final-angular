import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-private-editar-perfil',
  templateUrl: './private-editar-perfil.component.html',
  styleUrls: ['./private-editar-perfil.component.css']
})
export class PrivateEditarPerfilComponent implements OnInit {

  usuario: Usuario | null = null;

  constructor(private route: ActivatedRoute, private srv: UsuarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.srv.buscarUsuario(id).subscribe(data => {
        this.usuario = data;
      });
    });
  }

  editarUsuario() {
    if (this.usuario) {
      this.srv.editarUsuario(this.usuario).subscribe(data => {
        alert("Perfil modificado!");
      });
    }
  }

}
