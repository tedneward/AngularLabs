import {TestBed, inject} from '@angular/core/testing';

import {JokeService} from './joke.service';

describe('JokeService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [JokeService]
        });
    });

    it('should be created', inject([JokeService], (service: JokeService) => {
        expect(service).toBeTruthy();
    }));

    it('should return a joke list', inject([JokeService], (service: JokeService) => {
        const jokes = service.getJokes();
        expect(jokes).toBeTruthy();
        expect(jokes.length).toBeGreaterThan(0);
    }));

    it('should return a joke by id', inject([JokeService], (service: JokeService) => {
        expect(service.getJoke(service.getJokes()[0].id)).toBeTruthy();
    }));

});
