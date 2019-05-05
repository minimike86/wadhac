import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { faTimesCircle, faCheckCircle, faExclamationTriangle, faLevelUpAlt, faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  faExclamationTriangle = faExclamationTriangle;
  faLevelUpAlt = faLevelUpAlt;
  faLevelDownAlt = faLevelDownAlt;

  radarChartType: ChartType = 'radar';
  lineChartType: ChartType = 'line';
  doughnutChartType: ChartType = 'doughnut';

  radarChartData = {
    labels: ['Data Exfiltrated', 'Procrastination', 'Unauthorized Access',
      'Procedures Followed', 'Denial of Service', 'Unencrypted Data', 'Brute Force Attempts'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(0,220,0,0.1)',
        strokeColor: 'rgba(0,220,0,1)',
        pointColor: 'rgba(0,220,0,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(0,220,0,1)',
        data: [65, 100, 10, 20, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(255,0,0,0.2)',
        strokeColor: 'rgba(255,0,0,1)',
        pointColor: 'rgba(255,0,0,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(255,0,0,1)',
        data: [28, 48, 90, 60, 96, 27, 100]
      }
    ]
  };
  lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(0,255,0,0.1)',
        strokeColor: 'rgba(0,255,0,1)',
        pointColor: 'rgba(0,255,0,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(0,255,0,1)',
        data: [100, 90, 85, 80, 30, 0, 0]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(255,0,0,0.3)',
        strokeColor: 'rgba(255,0,0,1)',
        pointColor: 'rgba(255,0,0,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(255,0,0,1)',
        data: [28, 17, 24, 19, 35, 27, 100]
      }
    ]
  };
  doughnutChartData = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  doughnutChartLabels: Label[] = ['Fancy Graphics', 'Actual Security', 'Wasted Effort'];

  constructor() {
  }

  ngOnInit() {
  }

}
