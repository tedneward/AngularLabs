import {Component, OnInit} from '@angular/core';
import {JokeService} from '../joke.service';
import {Joke} from '../joke';

@Component({
    selector: 'app-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
    jokes: Joke[];

    constructor() {
    }

    ngOnInit() {
        this.jokes = (new JokeService()).getJokes();
    }

}
