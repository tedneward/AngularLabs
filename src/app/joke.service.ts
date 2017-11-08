import {Injectable} from '@angular/core';
import {Joke} from './joke';

@Injectable()
export class JokeService {
    private static database: Joke[] = [
        new Joke(1, 'Why did the milennial chicken cross the road?',
            'Because it was his passion.'),
        new Joke(2, 'Why did the political chicken cross the road?',
            'He didn\'t! ALTERNATIVE FACTS!'),
        new Joke(3, 'Why did the technical support chicken cross the road?',
            'Because he heard that it worked on the computer over there.'),
        new Joke(4, 'Why did the speaker chicken cross the road?',
            'I\'m sorry, we don\'t really have time to take that question now, but if you\'d like I can send you a consulting rate card...')
    ];

    constructor() {
    }

    public getJokes(): Array<Joke> {
        return JokeService.database;
    }

    public getJoke(jokeId: number) {
        console.log('Looking up joke #', jokeId);
        let joke: Joke = null;
        JokeService.database.forEach((it) => {
            if (it.id == jokeId) {
                console.log('Found it!');
                joke = it;
            }
        });
        return joke;
    }
}
