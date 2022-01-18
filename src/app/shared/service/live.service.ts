import { Live }  from './../model/live.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  readonly apiUrl = 'http://localhost:8080'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getLives(path: string): Observable<Live[]>{
    console.log(`${this.apiUrl}/${path}`);
    return this.httpClient.get<Live[]>(`${this.apiUrl}/${path}`);
  }

  public createLives(live: Live): Observable<Live>{
    return this.httpClient.post<Live>(this.apiUrl, live, this.httpOptions);
  }

}
