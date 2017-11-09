import {Component, OnInit} from '@angular/core';
import {JokeService} from '../joke.service';
import {ActivatedRoute} from '@angular/router';
import {Joke} from '../joke';

@Component({
    selector: 'app-joke-detail',
    templateUrl: './joke-detail.component.html',
    styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {
    joke: Joke;

    constructor(private jokeService: JokeService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        const jokeId: number = this.route.snapshot.params['jokeId'];
        console.log('Looking up joke', jokeId);
        this.joke = this.jokeService.getJoke(jokeId);
    }

}
