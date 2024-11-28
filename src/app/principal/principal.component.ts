import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VocalesService } from '../servicios/vocales.service';

interface Vocales {
  data: number[];
  texto: string;
}

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  public texto: string = '';

  constructor(private ruteador: Router, private apiVocales: VocalesService) { }

  public analizar() {
    //enviar data al backend this.ruteador.navigate(['descripcion'], { state: prenda });
    const vocales: Vocales = { data: [4, 6, 8, 10, 12], texto: "este es un texto" };


    this.apiVocales.obtenerAnalisisVocales(this.texto).subscribe({
      next: (valor) => {
        this.ruteador.navigate(['/dashboard'], { state: valor });
      },
      error: (e) => alert(e)
    });
  }
}
