import { Component, OnInit } from '@angular/core';
import { VocalesService } from '../servicios/vocales.service';
import { Router } from '@angular/router';

interface Vocales {
  data: number[];
  texto: string;
}

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css'
})
export class HistoricoComponent implements OnInit {
  public vocales: Vocales[] = [];

  constructor(private ruteador: Router, private apiVocales: VocalesService) { }

  ngOnInit(): void {
    this.apiVocales.obtenerListaRegistros().subscribe({
      next: (valor) => this.vocales = valor.analisis,
      error: (e) => alert("Error en servidor")
    });
  }

  public total(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
  }

  dashboard(indice: number) {
    this.ruteador.navigate(['/dashboard'], { state: this.vocales.at(indice) });
  }
}
