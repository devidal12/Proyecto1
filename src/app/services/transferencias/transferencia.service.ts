import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }

  urlApi: string = "http://localhost:8080/transferencia";

  
  // traer trans
  obtenerTransferencias(){
    return this.http.get(this.urlApi)
  }

  guardar(transferencia: any){
    return this.http.post(this.urlApi, transferencia)
  }


  obtenerTransferenciasPorIdBeneficiario(idBeneficiario: number){
    return this.http.get(this.urlApi+"/beneficiario/" + idBeneficiario)
  }
  obtenerTransferenciasPorIdOrdenante(idOrdenante: number){
    return this.http.get(this.urlApi+"/ordenante/" + idOrdenante)
  }

  obtenerTransferenciaPorId(id: number){
    const url = `${this.urlApi}/${id}`
    return this.http.get(url)
  }
}
