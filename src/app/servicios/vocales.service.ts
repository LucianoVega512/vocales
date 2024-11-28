import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Vocales {
  data: number[];
  texto: string;
}

const VOCALES: Vocales = { data: [4, 6, 8, 10, 12], texto: "este es un texto" };

@Injectable({
  providedIn: 'root'
})
export class VocalesService {

  constructor(private http: HttpClient) { }

  public obtenerAnalisisVocales(texto: string): Observable<Vocales> {
    console.log(texto);
    
    return new Observable((suscriptor) => {
      setTimeout(() => {
        suscriptor.next(VOCALES);
      }, 2000);
    });
  }
}
