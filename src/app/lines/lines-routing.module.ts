import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesComponent } from './lines.component';
import { AuthGuard } from '../auth/auth.guard';
import { LineStartComponent } from './line-start/line-start.component';
import { LineEditComponent } from './line-edit/line-edit.component';
import { LineDetailComponent } from './line-detail/line-detail.component';
import { LinesResolverService } from './lines-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LinesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: LineStartComponent },
      { path: 'new', component: LineEditComponent },
      {
        path: ':id',
        component: LineDetailComponent,
        resolve: [LinesResolverService]
      },
      {
        path: ':id/edit',
        component: LineEditComponent,
        resolve: [LinesResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinesRoutingModule {}
