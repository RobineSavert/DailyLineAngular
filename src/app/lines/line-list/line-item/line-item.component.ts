import { Component, OnInit, Input } from '@angular/core';

import { Line } from '../../line.model';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {
  @Input() line: Line;
  @Input() index: number;

  ngOnInit() {
  }
}
