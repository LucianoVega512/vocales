import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  constructor(private ruteador: Router) {}

  public analizar(){
    //enviar data al backend
    this.ruteador.navigate(['/dashboard']);
  }
}
