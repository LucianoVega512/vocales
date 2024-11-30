import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { Router } from '@angular/router';

interface Vocales {
  data: number[];
  texto: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public doughnutChartLabels: string[] = ['A', 'E', 'I', 'O', 'U'];

  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [] }
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true
  };

  private vocales:Vocales;

  constructor(private router: Router){
    this.vocales = <Vocales>router.getCurrentNavigation()?.extras.state;
    this.doughnutChartDatasets[0].data = this.vocales.data;    
  }
}
