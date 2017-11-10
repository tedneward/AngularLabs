export class Joke {
    constructor(private _id: number, private _setup: string, private _punchline: string,
                private _lols: number = 0, private _groans: number = 0) {}

    public get id(): number { return this._id; }
    public get setup(): string { return this._setup; }
    public get punchline(): string { return this._punchline; }
    public get lols(): number { return this._lols; }
    public get groans(): number { return this._groans; }

    public upVote() {
        this._lols++;
    }

    public downVote() {
        this._groans++;
    }
}
