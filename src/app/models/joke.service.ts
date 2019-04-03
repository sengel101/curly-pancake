import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Runs the RandomJoke function to call the Random Joke API

export class JokeService {

  constructor(private http: HttpClient) {}

    getRandomJoke(){
      return this.http.get('https://icanhazdadjoke.com/slack');

  }
}
