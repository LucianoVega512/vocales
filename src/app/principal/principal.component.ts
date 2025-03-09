import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VocalesService, Vocales } from '../servicios/vocales.service';

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
        const arreglo = this.obtenerArreglo(valor);
        const texto = "Pendiente el texto";
        this.ruteador.navigate(['/dashboard'], { state: {data:arreglo, texto:texto} });
      },
      error: (e) => alert("Error en servidor")
    });
  }

  private obtenerArreglo(vocales:Vocales):Array<number>{
    return Array.from([vocales['vocal a'], vocales['vocal e'], vocales['vocal i'], vocales['vocal o'], vocales['vocal u']])
  }
}
