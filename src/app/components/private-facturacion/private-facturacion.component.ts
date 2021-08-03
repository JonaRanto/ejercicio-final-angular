import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { FacturaService } from 'src/app/services/factura.service';
import { MisCursosService } from 'src/app/services/mis-cursos.service';
import { Factura } from '../models/factura';
import { MisCursos } from '../models/misCursos';

@Component({
  selector: 'app-private-facturacion',
  templateUrl: './private-facturacion.component.html',
  styleUrls: ['./private-facturacion.component.css']
})
export class PrivateFacturacionComponent implements OnInit {

  facturas: Factura[] | null = null;
  hayFacturas: boolean = false;

  constructor(private srv: FacturaService, private srvMiCurso: MisCursosService, private srvCurso: CursoService) { }

  ngOnInit(): void {
    this.buscarFacturas();
  }

  buscarFacturas() {
    this.srv.buscarFacturas(1).subscribe(data => {
      this.facturas = data;
      if (this.facturas.length != 0) {
        this.hayFacturas = true;
      }
      else {
        this.hayFacturas = false;
      }
    });
  }

  pagarFactura(factura: Factura) {
    factura.estado = "Pagada";
    this.srv.pagarFactura(factura).subscribe(respuesta => {
      this.srvCurso.buscarCurso(factura.idCurso).subscribe(data => {
        let miCurso: MisCursos = {
          idUsuario: factura.idUsuario,
          idCurso: factura.idCurso,
          nombre: data.nombre,
          profesor: data.profesor,
          imagen: data.imagen
        }
        this.srvMiCurso.agregarCurso(miCurso).subscribe(respuesta => {
          alert("Factura Pagada!");
          this.buscarFacturas();
        })
      });
    });
  }

  cancelarFactura(id?: number) {
    this.srv.cancelarFactura(id).subscribe(respuesta => {
      alert("Factura Cancelada!");
      this.buscarFacturas();
    });
  }
}
