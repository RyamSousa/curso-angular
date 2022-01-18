import { LocalDateTimePipe } from './../../shared/pipe/local-date-time.pipe';
import { LiveFormDialogComponent } from './home/live-form-dialog/live-form-dialog.component';
import { LiveListComponent } from './home/live-list/live-list.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivesRoutingModule } from './lives-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import './import-material-modules';
import { MaterialModules } from './import-material-modules';


@NgModule({
  declarations: [
    HomeComponent,
    LiveFormDialogComponent,
    LiveListComponent,
    LocalDateTimePipe
  ],
  imports: [
    CommonModule,
    LivesRoutingModule,
    FormsModule,
    MaterialModules,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [
    LocalDateTimePipe
  ]
})
export class LivesModule { }
