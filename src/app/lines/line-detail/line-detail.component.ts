import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Line } from '../line.model';
import { LineService } from '../line.service';

@Component({
  selector: 'app-line-detail',
  templateUrl: './line-detail.component.html',
  styleUrls: ['./line-detail.component.scss']
})
export class LineDetailComponent implements OnInit {
  line: Line;
  id: number;

  constructor(private lineService: LineService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.line = this.lineService.getLine(this.id);
        }
      );
  }

  onEditLine() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteLine() {
    this.lineService.deleteLine(this.id);
    this.router.navigate(['/lines']);
  }

}
