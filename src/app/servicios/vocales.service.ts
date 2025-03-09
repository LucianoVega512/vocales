import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Vocales{
  "vocal a": number;
  "vocal e": number;
  "vocal i": number;
  "vocal o": number;
  "vocal u": number;
}

@Injectable({
  providedIn: 'root'
})
export class VocalesService {
  // private LISTA_VOCALES = "http://localhost:7000/api/obtener_lista_vocales";
  // private ANALIZAR_VOCALES = "http://localhost:7000/api/analizar_vocales";
  //https://democheck.duckdns.org/vocales?texto_entrada=aaaaaeeeeiiioou
  private ANALIZAR_VOCALES = "https://democheck.duckdns.org/vocales";

  constructor(private http: HttpClient) { }

  public obtenerAnalisisVocales(texto: string): Observable<Vocales> {
    const parametro = { params: new HttpParams().set('texto_entrada', texto) };
    return this.http.get<Vocales>(this.ANALIZAR_VOCALES, parametro);
  }

  // public obtenerListaRegistros(): Observable<any> {
  //   return this.http.get<any>(this.LISTA_VOCALES);
  // }
}
