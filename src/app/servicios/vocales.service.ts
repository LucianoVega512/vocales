import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Vocales {
  data: number[];
  texto: string;
}

interface TextoAnalizar {
  texto: string
}

const VOCALES: Vocales[] = [
  { data: [4, 6, 8, 10, 12], texto: "este es un texto este es un texto este es un texto" },
  { data: [1, 2, 3, 4, 5], texto: "este es otro texto" },
  { data: [10, 20, 30, 40, 50], texto: "Uno mas para analizar" },
];

@Injectable({
  providedIn: 'root'
})
export class VocalesService {
  private LISTA_VOCALES = "http://192.168.0.123:7000/api/obtener_lista_vocales";
  private ANALIZAR_VOCALES = "http://192.168.0.123:7000/api/analizar_vocales";

  constructor(private http: HttpClient) { }

  public obtenerAnalisisVocales(texto: string): Observable<Vocales> {
    return this.http.post<Vocales>(this.ANALIZAR_VOCALES, { texto: texto });
    // return new Observable((suscriptor) => {
    //   setTimeout(() => {
    //     suscriptor.next(VOCALES[0]);
    //   }, 2000);
    // });
  }

  public obtenerListaRegistros(): Observable<Vocales[]> {
    return new Observable((suscriptor) => {
      setTimeout(() => {
        suscriptor.next(VOCALES);
      }, 2000);
    });
  }
}
