import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { FacturaService } from 'src/app/services/factura.service';
import { MisCursosService } from 'src/app/services/mis-cursos.service';
import { Factura } from '../models/factura';

@Component({
  selector: 'app-private-detalle-curso',
  templateUrl: './private-detalle-curso.component.html',
  styleUrls: ['./private-detalle-curso.component.css']
})
export class PrivateDetalleCursoComponent implements OnInit {

  fechaActual = Date.now();
  id: number = 0;
  curso: any;
  cursoComprado: boolean = false;

  constructor(private route: ActivatedRoute, private srv: CursoService, private srvFactura: FacturaService, private srvMisCursos: MisCursosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.srv.buscarCurso(this.id).subscribe(data => {
        this.curso = data;
        this.srvMisCursos.verificarCurso(data.id).subscribe(respuesta => {
          if (respuesta != "") {
            this.cursoComprado = true;
          }
        });
      });
    });
  }

  generarFactura() {
    this.srv.buscarCurso(this.id).subscribe(data => {
      let factura: Factura = {
        idUsuario: 1,
        idCurso: data.id,
        curso: data.nombre,
        monto: data.precio,
        fechaEmision: this.fechaActual,
        estado: "Por Pagar",
      }
      this.srvFactura.generarFactura(factura).subscribe(respuesta => {
        alert("Factura Generada!");
      });
    })
  }

}
