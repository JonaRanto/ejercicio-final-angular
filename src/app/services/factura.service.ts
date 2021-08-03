import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../components/models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  buscarFacturas(idUsuario: number) {
    return this.http.get<Factura[]>("http://localhost:3000/factura?idUsuario=" + idUsuario);
  }

  pagarFactura(factura: Factura) {
    return this.http.put("http://localhost:3000/factura/" + factura.id, factura)
  }

  cancelarFactura(id?: number) {
    return this.http.delete("http://localhost:3000/factura/" + id);
  }

  generarFactura(factura: Factura) {
    return this.http.post("http://localhost:3000/factura", factura);
  }
}
