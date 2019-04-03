import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {}

    getRandomJoke(){
      return this.http.get('https://icanhazdadjoke.com/slack');

  }
}
