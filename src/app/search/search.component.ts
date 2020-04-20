import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '../shared/calendar/calendar.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  @ViewChild('lineCalendar', { static: false })
  lineCalendar: CalendarComponent;
}
