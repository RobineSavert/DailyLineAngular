import { Component, OnInit } from '@angular/core';
import { LineService } from '../lines/line.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit{
  constructor(private lineService: LineService) { }

  ngOnInit() {
    this.getLines();
  }

  getLines(): void {
    this.lineService.getLines();
  }
}
