import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



const base_url = "http://localhost:8080/api/Prueba/Consulta";




@Injectable({
  providedIn: 'root'
})


export class PagadorService {

  constructor(private http: HttpClient) { }

//OBTIENE TODOS LOS USUARIOS ROL_PAGADOR
  getUsuarioPagador(){

    const endpoint = `${base_url}/Rol_Pagador`;
    return this.http.get(endpoint);
  }

  getUsuarioComercio(){

    const endpoint = `${base_url}/comercio`;
    return this.http.get(endpoint);
  }


}
