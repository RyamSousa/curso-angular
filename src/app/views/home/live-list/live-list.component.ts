import { Live } from './../../../shared/model/live.model';
import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious: Live[];
  livesNext: Live[];

  constructor(public livesService: LiveService) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives(){
    this.livesService.getLives().subscribe(data => {
      this.livesPrevious = data;
      console.log(this.livesPrevious);
    });

    this.livesService.getLives().subscribe(data => {
      this.livesNext = data;
      console.log(this.livesNext);
    });

  }
}
