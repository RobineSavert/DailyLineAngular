import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Line } from './line.model';
import { DataStorageService } from '../shared/data-storage.service';
import { LineService } from './line.service';

@Injectable({ providedIn: 'root' })
export class LinesResolverService implements Resolve<Line[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private lineService: LineService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const lines = this.lineService.getLines();

    if (lines.length === 0) {
      return this.dataStorageService.fetchLines();
    } else {
      return lines;
    }
  }
}
