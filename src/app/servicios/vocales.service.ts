import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VocalesService {
  private LISTA_VOCALES = "http://localhost:7000/api/obtener_lista_vocales";
  private ANALIZAR_VOCALES = "http://localhost:7000/api/analizar_vocales";

  constructor(private http: HttpClient) { }

  public obtenerAnalisisVocales(texto: string): Observable<any> {
    return this.http.post<any>(this.ANALIZAR_VOCALES, { texto: texto });
  }

  public obtenerListaRegistros(): Observable<any> {
    return this.http.get<any>(this.LISTA_VOCALES);
  }
}
