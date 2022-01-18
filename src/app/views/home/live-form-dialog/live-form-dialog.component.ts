import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
