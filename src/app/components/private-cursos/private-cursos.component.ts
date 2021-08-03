import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-private-cursos',
  templateUrl: './private-cursos.component.html',
  styleUrls: ['./private-cursos.component.css']
})
export class PrivateCursosComponent implements OnInit {

  cursos: any;

  constructor(private srv: CursoService) { }

  ngOnInit(): void {
    this.srv.obtenerCurso().subscribe(data => {
      this.cursos = data;
    })
  }
}
