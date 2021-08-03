import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-private-mi-perfil',
  templateUrl: './private-mi-perfil.component.html',
  styleUrls: ['./private-mi-perfil.component.css']
})
export class PrivateMiPerfilComponent implements OnInit {

  usuario:any;

  constructor(private srv:UsuarioService) { }

  ngOnInit(): void {
    this.srv.buscarUsuario(1).subscribe(data => {
      this.usuario = data;
    });
  }

}
