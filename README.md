# AngularLabs

This README file contains the default Angular CLI-generated content, plus the lab instructions for each step. Each lab step is tagged with a branch, so to start on the first lab, simply `git checkout master`, examine the README file for the instructions, and begin.

# Lab 4: Jokes, Votes, LOLs, Oh My!

These jokes are great, but nobody has the ability to let us know that! Clearly we need some kind of feedback mechanism to give our extremely high-quality jokes a chance to shine. A popular mechanism for doing that in the social media world is the "upvote", so let's build some upvoting capability into the joke. However, this is something we could use well beyond just jokes, so in the spirit of The Angular Way, we'll build vote components rather than just hacking on Joke directly. This will allow us to use voting mechanics for any other kind of application. (At least, we hope so, anyway.)

For this lab, the instructions are going to be a bit more terse and not quite so step-by-step (at least for those parts that you've already done before), so that you can test your understanding of the various Angular elements.

* *Add members to Joke to track "LOL"s and "groan"s.* 
  * Add a number field for each, initialized to zero. Add two methods to return the current value of those fields, and create two methods, `upVote` (which increments the "LOL"s) and `downVote` (which increments the "groan"s).

* *Create a VoteComponent.* 
  * CLI goodness once again. Remember that whatever name you pass on the command-line will have the word "Component" automatically suffixed to it. Note that this VoteComponent will be used twice on the same page (in JokeDetailComponent): one for the LOLs, and one for the groans; in other words, each VoteComponent instance represents a single voting category.

* *Add an @Input parameter to Vote for the incoming vote count.* 
  * This will be a field on the VoteComponent class of type number, and decorated with the `@Input` decorator. Take note of this name--we will need it again on the HTML template. (We called ours "voteCount".)

* *Modify the VoteComponent HTML template to display the vote count.* 
  * Replace what was generated here with a simple `span` that displays the vote-count field using template-expression syntax.

* *Modify the JokeDetailComponent HTML template to use the newly-generated VoteComponent.* 
  * After the paragraph with the setup and punchline, add new text for "LOLs:" and use the newly-generated VoteComponent tag ("app-vote" if you didn't change anything). Note that the app-vote "tag" is expecting some input data to know the number of votes already counted, so use the property-input ("incoming") syntax to pass the "lols" property of the Joke object in as input. (Remember that property-input syntax uses the square-brackets.)

* *Repeat for the groans.* 
  * Groans deserve to be upvoted, too.

At this point, the votes should be displayed, but we're missing a key feature--no upvoting behavior! We can add it by adding a clickable region of text, using an "up-arrow" Unicode character (&#x25B2;) for the clickable text, and capture the event in the Vote. But we also have to pass the event on to the Joke, so it knows to increment its internal counts.

* *Modify the VoteComponent to take a click handler.* 
  * Add a method `onClick` to the VoteComponent class, and reference it from the VoteComponent's HTML template's `span`'s click event. (Remember that event-binding syntax uses the round-brackets.) The text in the HTML should still display the vote count, but put the Unicode up-arrow character, Unicode code-point 25B2 (`&#x25B2;`), into the span's text.

* *Modify the VoteComponent by adding an @Output-decorated EventEmitter.* 
  * The EventEmitter should be parameterized to emit numbers. We called ours "onVote". This is what will be used to communicate upvote events to any interested listeners (such as the JokeDetailComponent).

* *Modify the VoteComponent by adding an onClick() method.* 
  * The onClick() method will need to do two things: one, increment the VoteComponent's vote field, and two, emit the event to any interested listeners via the EventEmitter using its `emit` method.
  * *NOTE:* An interesting design question arises here: Should the event emit the change in vote status (+1, basically), or should it emit the vote count? And should that be pre-increment vote count, or post-increment vote count? We chose to keep it simple and just emit a "+1", but a strong case could be made for emitting the vote count. Or the EventEmitter could emit a tuple of (old, new) values, or a custom VoteEvent object, or.... Possibilities abound.

* *Wire up the JokeDetailComponent to receive the VoteComponent events.* 
  * Add an `upVote` method and a `downVote` method, each doing nothing but calling the Joke's methods of the same names (to let the Joke upvote or downvote accordingly). Wire these methods up to the "onVote" event on the VoteComponent in the JokeDetailComponent HTML template--the LOLs VoteComponent's "onVote" should call "upVote", and the groans VoteComponent's "onVote" should call "downvote". (Remember, event-capture syntax uses the rounded brackets.)

At this point, you're done with Lab 4. If you're not sure you got it working propertly, feel free to jump ahead by doing a `git checkout final` and looking at our implementation.

## Reference links

[TypeScript](https://github.com/Microsoft/TypeScript)

[TypeScript Official Language Spec](https://github.com/Microsoft/TypeScript/tree/2.1/doc)

[Angular Website TypeScript-flavored docs](https://angular.io/docs/ts/latest/)

[Angular Cheat-Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)

## Angular CLI details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Lab 4: 



## Congratulations

At this point, the domain models are finished. If you are not sure if you got it all to work, you can always fast-forward to the next lab by doing a `git checkout final`. It has our finalized solution; yours of course may be different.

