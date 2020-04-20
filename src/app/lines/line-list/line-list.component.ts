import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Line } from '../line.model';
import { LineService } from '../line.service';

@Component({
  selector: 'app-line-list',
  templateUrl: './line-list.component.html',
  styleUrls: ['./line-list.component.scss']
})
export class LineListComponent implements OnInit, OnDestroy {
  lines: Line[];
  subscription: Subscription;
  @Input() limit: number;

  constructor(private lineService: LineService) {
  }

  ngOnInit() {
    this.subscription = this.lineService.linesChanged
      .subscribe(
        (lines: Line[]) => {
          this.lines = lines;
        }
      );
    this.lines = this.lineService.getLines();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
