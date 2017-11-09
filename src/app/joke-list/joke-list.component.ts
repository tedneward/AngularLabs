import {Component, OnInit} from '@angular/core';
import {JokeService} from '../joke.service';
import {Joke} from '../joke';
import {Router} from '@angular/router';

@Component({
    selector: 'app-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
    jokes: Joke[];

    constructor(private jokeService: JokeService, private router: Router) {
    }

    ngOnInit() {
        this.jokes = this.jokeService.getJokes();
    }

    showJoke(joke: Joke) {
        this.router.navigate(['/jokes/' + joke.id]);
    }


}
