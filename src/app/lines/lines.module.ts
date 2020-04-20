import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LinesComponent } from './lines.component';
import { LineListComponent } from './line-list/line-list.component';
import { LineDetailComponent } from './line-detail/line-detail.component';
import { LineItemComponent } from './line-list/line-item/line-item.component';
import { LineStartComponent } from './line-start/line-start.component';
import { LineEditComponent } from './line-edit/line-edit.component';

import { LinesRoutingModule } from './lines-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LinesComponent,
        LineListComponent,
        LineDetailComponent,
        LineItemComponent,
        LineStartComponent,
        LineEditComponent
    ],
    exports: [
        LineListComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        LinesRoutingModule,
        SharedModule
    ]
})
export class LinesModule {}
