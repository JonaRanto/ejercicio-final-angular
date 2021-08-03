import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MisCursos } from '../components/models/misCursos';

@Injectable({
  providedIn: 'root'
})
export class MisCursosService {

  constructor(private http: HttpClient) { }

  obtenerMisCursos(idUsuario: number) {
    return this.http.get<MisCursos[]>("http://localhost:3000/misCursos?idUsuario=" + idUsuario)
  }

  agregarCurso(curso: MisCursos) {
    return this.http.post("http://localhost:3000/misCursos", curso)
  }

  verificarCurso(idCurso: number) {
    return this.http.get("http://localhost:3000/misCursos?idCurso=" + idCurso)
  }
}
