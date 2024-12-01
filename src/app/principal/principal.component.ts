import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VocalesService } from '../servicios/vocales.service';

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
    this.apiVocales.obtenerAnalisisVocales(this.texto).subscribe({
      next: (valor) => {       
        this.ruteador.navigate(['/dashboard'], { state: valor.analisis });
      },
      error: (e) => alert(e)
    });
  }
}
