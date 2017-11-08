export class Joke {
    constructor(private _id: number, private _setup: string, private _punchline: string) {}

    public get id(): number { return this._id; }
    public get setup(): string { return this._setup; }
    public get punchline(): string { return this._punchline; }
}