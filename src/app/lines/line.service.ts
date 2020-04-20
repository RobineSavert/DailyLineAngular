import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Line } from './line.model';

@Injectable()
export class LineService {
  linesChanged = new Subject<Line[]>();

  private lines: Line[] = [];

  constructor() {}

  setLines(lines: Line[]) {
    this.lines = lines;
    this.linesChanged.next(this.lines.slice());
  }

  getLines() {
    return this.lines.slice();
  }

  getLine(index: number) {
    return this.lines[index];
  }

  addLine(line: Line) {
    this.lines.push(line);
    this.linesChanged.next(this.lines.slice());
  }

  updateLine(index: number, newLine: Line) {
    this.lines[index] = newLine;
    this.linesChanged.next(this.lines.slice());
  }

  deleteLine(index: number) {
    this.lines.splice(index, 1);
    this.linesChanged.next(this.lines.slice());
  }
}
