import { Component, OnInit } from '@angular/core';
import { MisCursosService } from 'src/app/services/mis-cursos.service';
import { MisCursos } from '../models/misCursos';

@Component({
  selector: 'app-private-mis-cursos',
  templateUrl: './private-mis-cursos.component.html',
  styleUrls: ['./private-mis-cursos.component.css']
})
export class PrivateMisCursosComponent implements OnInit {

  misCursos: MisCursos[] | null = null;
  hayCursos: boolean = false;

  constructor(private srv: MisCursosService) { }

  ngOnInit(): void {
    this.srv.obtenerMisCursos(1).subscribe(data => {
      this.misCursos = data;
      if (this.misCursos.length != 0) {
        this.hayCursos = true;
      }
      else {
        this.hayCursos = false;
      }
    });
  }

}
