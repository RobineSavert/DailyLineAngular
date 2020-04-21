import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.fetchLines().subscribe();
  }
}
