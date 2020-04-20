import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent{

  constructor(private router: Router) { }

  onNewLine() {
    this.router.navigate(['new']);
  }

}
