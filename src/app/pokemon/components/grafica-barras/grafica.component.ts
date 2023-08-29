import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Stat } from '../../interfaces/pokemon.interface';
@Component({
  selector: 'pokemon-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ["./grafica.component.css"]
})
export class GraficaComponent {

  @Input()
  public pokemon:Stat[]=[];

  @Input()
  img! :string

  @Input() name!:string

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: '#f8fafc' // Cambia el color del texto de las etiquetas del eje X
        }
      },
      y: {
        ticks: {
          color: '#f8fafc', // Cambia el color del texto de las etiquetas del eje Y
          
        }
      },
    },
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: ChartDataset[] = [
    { data: [12, 19, 3, 5, 2,2], label: 'Total',
    backgroundColor: [ // Colores de fondo personalizados para cada barra
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(153, 102, 255, 0.7)',
      ],
      borderColor: [ // Colores del borde de las barras
      'rgba(75, 192, 192, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(153, 102, 255, 1)',
    ],

   }

  ];

  constructor() { }

  ngOnInit(): void {
    this.barChartData[0].data=[];
    this.barChartLabels=[];
    this.barChartLabels.push(this.pokemon[0].stat.name)
    this.barChartLabels.push(this.pokemon[1].stat.name)
    this.barChartLabels.push(this.pokemon[2].stat.name)
    this.barChartLabels.push(this.pokemon[3].stat.name)
    this.barChartLabels.push(this.pokemon[4].stat.name)
    this.barChartLabels.push(this.pokemon[5].stat.name)

    this.barChartData[0].data.push(this.pokemon[0].base_stat)
    this.barChartData[0].data.push(this.pokemon[1].base_stat)
    this.barChartData[0].data.push(this.pokemon[2].base_stat)
    this.barChartData[0].data.push(this.pokemon[3].base_stat)
    this.barChartData[0].data.push(this.pokemon[4].base_stat)
    this.barChartData[0].data.push(this.pokemon[5].base_stat)
    console.log(this.pokemon);
  }

}
