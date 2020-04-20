import { Component } from '@angular/core';
import { Line } from '../line.model';

@Component({
  selector: 'app-line-start',
  templateUrl: './line-start.component.html',
  styleUrls: ['./line-start.component.scss']
})
export class LineStartComponent {
  lines: Line[];
}
