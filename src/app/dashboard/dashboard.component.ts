import { Component, OnInit } from '@angular/core';
import { LineService } from '../lines/line.service';
import { Line } from '../lines/line.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit{
  constructor(private lineService: LineService) { }

  ngOnInit() {
    this.getLines();
  }

  getLines(): void {
    this.lineService.getLines();
  }
}
