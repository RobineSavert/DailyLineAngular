import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { LineService } from '../line.service';

@Component({
  selector: 'app-line-edit',
  templateUrl: './line-edit.component.html',
  styleUrls: ['./line-edit.component.scss']
})
export class LineEditComponent implements OnInit {
  id: number;
  editMode = false;
  lineForm: FormGroup;
  tomorrow = new Date();

  constructor(
    private route: ActivatedRoute,
    private lineService: LineService,
    private router: Router
  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.lineService.updateLine(this.id, this.lineForm.value);
    } else {
      this.lineService.addLine(this.lineForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let lineName = '';
    let lineDate = '';

    if (this.editMode) {
      const line = this.lineService.getLine(this.id);
      lineName = line.name;
      lineDate = line.date;
    }

    this.lineForm = new FormGroup({
      name: new FormControl(lineName, Validators.required),
      date: new FormControl(lineDate, Validators.required)
    });
  }
}
