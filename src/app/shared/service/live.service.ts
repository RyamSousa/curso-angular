import { Live }  from './../model/live.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  readonly apiUrl = 'http://localhost:8080/content'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getLives(): Observable<Live[]>{
    return this.httpClient.get<Live[]>(this.apiUrl);
  }
}
