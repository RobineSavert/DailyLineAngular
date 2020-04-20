import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Line } from '../lines/line.model';
import { LineService } from '../lines/line.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private lineService: LineService,
    private authService: AuthService
  ) {}

  storeLines() {
    const lines = this.lineService.getLines();
    this.http
      .put(
        'https://dailyline-37b96.firebaseio.com/lines.json',
        lines
      )
      .subscribe(response => {

      });
  }

  fetchLines() {
    return this.http.get<Line[]>('https://dailyline-37b96.firebaseio.com/lines.json').pipe(
      map(lines => lines ? lines.map(line => ({ ...line })) : []),
      tap(lines => this.lineService.setLines(lines))
    );
  }
}
