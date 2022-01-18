import { Live } from './../../../shared/model/live.model';
import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious: Live[];
  livesNext: Live[];

  constructor(public livesService: LiveService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.livesService.getLives().subscribe(data => {
      this.livesPrevious = data;
      this.livesPrevious.forEach(l => {
        l.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(l.liveLink);
      })
    });

    this.livesService.getLives().subscribe(data => {
      this.livesNext = data;
      this.livesNext.forEach(l => {
        l.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(l.liveLink);
      });
      this.livesNext = this.livesNext.filter(l => l.id > 9);
    });

  }
}
