import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

    @Input() voteCount: number;

    @Output() onVote = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(): void {
        console.log('Clicked!');
        this.voteCount++;
        this.onVote.emit(1);
    }
}
