import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from '../shared/calendar/calendar.component';
import { Moment } from 'moment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  @ViewChild('lineCalendar', { static: false })
  lineCalendar: CalendarComponent;

  constructor() { }

  ngOnInit() {

  }

  dateSelected(value: Moment) {
    console.log(value);
  }
}
