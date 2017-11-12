# AngularLabs

This README file contains the default Angular CLI-generated content, plus the lab instructions for each step. Each lab step is tagged with a branch, so to start on the first lab, simply "git checkout master", examine the README file for the instructions, and begin.

## Lab 2: JokeListComponent

In this lab, we will build a component that lists the Jokes returned by the JokeService.

* *Generate the JokeListComponent.* First generate the JokeListComponent: `ng generate component JokeList`. This will create a subdirectory called `joke-list` that will contain four files, an HTML file, a CSS file, and like the Joke class from the previous lab, a Typescript file containing the component code and TypeScript test file (which will be suffixed with 'spec.ts').

* *Add the list of Jokes to the JokeListComponent.* Add an instance field, called "jokes", an array of Joke. In the `ngOnInit` method, set the "jokes" field to the result of calling the `getJokes` method on the JokeService. In a future lab, we'll get Angular to provide the service, but for now, just `new` one up in code.

* *Create the HTML template.* In order to loop through the array of Jokes, we need to use the `*ngFor` directive in the template. Use `*ngFor` on a `div` tag to loop through the jokes (using `let joke of jokes`). Inside the `div` tag, use template expression syntax (the double-curly-brackets syntax) to display each joke's setup and punchline. (Put the punchline in bold, just for that extra effect.)

At this point, the domain models are finished. If you are not sure if you got it all to work, you can always fast-forward to the next lab by doing a `git checkout lab-3`.

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
