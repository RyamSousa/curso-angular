import { LocalDateTimePipe } from './../../shared/pipe/local-date-time.pipe';
import { LiveFormDialogComponent } from './home/live-form-dialog/live-form-dialog.component';
import { LiveListComponent } from './home/live-list/live-list.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivesRoutingModule } from './lives-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [
    LocalDateTimePipe
  ]
})
export class LivesModule { }
