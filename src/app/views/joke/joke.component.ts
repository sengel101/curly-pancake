import { Component, OnInit } from '@angular/core';
import {JokeService} from '../../models/joke.service';
import {ActivatedRoute} from '@angular/router';


@Component({  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  jokeText: any ;
  constructor(private jokeFetcher: JokeService, private route: ActivatedRoute) {
  }
  // Executes jokeFetcher function of Service to load the Random Joke into result

  ngOnInit() {
    this.jokeFetcher.getRandomJoke().subscribe(
      (result) => {
        console.log(result);
      }
    );
  }

}

