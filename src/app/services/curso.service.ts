import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../components/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  obtenerCurso(){
    return this.http.get("http://localhost:3000/curso");
  }

  buscarCurso(id:number) {
    return this.http.get<Curso>("http://localhost:3000/curso/" + id);
  }
}
