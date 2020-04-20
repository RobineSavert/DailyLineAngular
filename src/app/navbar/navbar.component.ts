import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  LINKS = [
    {"label":"Home","icon":"home","route":"dashboard"},
    {"label":"Diary","icon":"book","route":"diary"},
    {"label":"Lines","icon":"plus","route":"lines"},
    {"label":"Search","icon":"search","route":"search"},
    {"label":"Settings","icon":"user","route":'settings'}
  ];
}
