import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlujoDatosService } from './flujo-datos.service';

@Injectable({
  providedIn: 'root'
})
export class SegUsuarioService {

  private loginUsuarioApi: string = "http://34.16.181.123:8080/user/";

  constructor(private http: HttpClient, private flujoDatosService: FlujoDatosService) { }

  loguearUsuarioAPI(usuario: string, clave: string): Observable<any> {
    let params = new HttpParams().set('usuario', usuario).set('clave', clave);
    this.flujoDatosService.setUsuarioLogin({nombre: 'GARCIA NAVARRETE RICKY ALEJANDRO', usuario: "ragarcia12"});
    return this.http.get<any>(this.loginUsuarioApi, { params: params });
  }

}
