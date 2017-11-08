import {Joke} from './joke';

describe('Joke', () => {
    it('should create an instance', () => {
        expect(new Joke(1, 'Developer: There is no I in TEAM', 'Tester: We cannot spell BUGS without U')).toBeTruthy();
    });
    it('should have id equal to 1', () => {
        let joke = new Joke(1, 'Developer: There is no I in TEAM', 'Tester: We cannot spell BUGS without U');
        expect(joke.id).not.toBeNull();
        expect(joke.id).toEqual(1);
    });
    it('should have as setup \'Developer: There is no I in TEAM\'', () => {
        let joke = new Joke(1, 'Developer: There is no I in TEAM', 'Tester: We cannot spell BUGS without U');
        expect(joke.setup).not.toBeNull();
        expect(joke.setup).toEqual('Developer: There is no I in TEAM');
    });
    it('should have as punchline \'Tester: We cannot spell BUGS without U\'', () => {
        let joke = new Joke(1, 'Developer: There is no I in TEAM', 'Tester: We cannot spell BUGS without U');
        expect(joke.punchline).not.toBeNull();
        expect(joke.punchline).toEqual('Tester: We cannot spell BUGS without U');
    });
});
