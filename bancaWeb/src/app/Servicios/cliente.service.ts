import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //private buscarClienteApi = "http://34.102.85.160:8080/cliente/buscar";
  
  private buscarClienteApi = "http://34.102.85.160:8080/cliente/buscar";


  private buscarClientePorIdApi = "http://34.102.85.160:8080/cliente/buscar-cliente";
  private buscarUsuarioApi = "http://34.125.230.91:8080/seg-cliente/clientes"

  constructor(private http: HttpClient) { }

  buscarClientePorParametros(tipo: string, numero: string): Observable<any> {
    let params = new HttpParams().set('tipo', tipo).set('numero', numero);
    return this.http.get<any>(this.buscarClienteApi, { params: params });
  }

  buscarClientePorId(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<any>(`${this.buscarClientePorIdApi}?id=${id}`);
  }

  buscarUsuario(idUsuario: number): Observable<any> {
    let url = `${this.buscarUsuarioApi}/${idUsuario}`;
    return this.http.get<any>(url);
  }

}
