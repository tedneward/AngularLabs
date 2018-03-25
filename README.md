# AngularLabs

This README file contains the default Angular CLI-generated content, plus the lab instructions for each step. Each lab step is tagged with a branch, so to start on the first lab, simply `git checkout lab-1`, examine the README file for the instructions, and begin.

## Lab 1: Domain Models

In this lab, we will build out two domain models for the rest of the workshop.

One will be the "Joke" class, which will hold the data around a particular joke.

The other will be the "JokeService" class, which will be the principal means by which Jokes will be obtained and stored. (In essence, it will be an implementation of the [Repository pattern](https://msdn.microsoft.com/en-us/library/ff649690.aspx).)

We will also build tests for both, because unit tests are an essential part of developing a project.

From a command-line prompt, before any work is done, type `ng test`; this will open a browser window and run tests continuously while we are editing code, and will inform you if there are any breaking tests and/or code that does not compile. You can quit this at any time by typing "Ctrl-C" in the command-line window.

* *Generate the Joke class.* 
  * Let Angular-CLI do the work: `ng generate class Joke --spec true`. This will be the `src/app/joke.ts` and `src/app/joke.spec.ts` files. A Joke consists of an "id" (a number), a "setup" (a string), and a "punchline" (string).

* *Modify the Joke tests.* 
  * This time, TDD-style, modify the Joke tests first. (This will cause the tests to fail, which is expected; we fix that in the next step.) Modify the first test (the one already generated) to have the constructor take three parameters: one for the joke's primary-key id, one for the joke setup, and one for the joke punchline. Then write tests that ensure that the Joke object makes these fields accessible from properties (named `setup`, `punchline`, `id`).

* *Modify the Joke class to pass the tests.* 
  * This will require adding the three parameters to the constructor and the three properties. When the tests pass, we can consider Joke to be tested and ready to go. Although, as we go on with the lab, you should think about what additional tests we could (and should) add.

  * This gives us a domain model class, but we still need a way to do CRUD for it--which, of course, is what the JokeService class is for.

* *Generate the JokeService class.* 
  * We will eventually want this to be an Angular service, so let's go ahead and use the CLI to create the service; for now, we'll use it as a straightforward class, but begin by generating the service using `ng generate service Joke --spec true`. This will create the `src/app/joke.service.ts` file and its associated specification (test) file, `src/app/joke.service.spec.ts`.

* *Write some JokeService tests.* 
  * Notice that the JokeService tests use a slightly different idiom than the Joke tests; use that same idiom to test two methods on JokeService, `getJokes`, which should return an Array<Joke>, and `getJoke`, which will take a number as a parameter (the ID of the Joke to return). The first test should test that `getJokes` returns more than zero objects, and the second should test that when passed the id "1", it returns the first Joke in the list.

* *Modify the JokeService class to pass the tests.* 
  * Inside the JokeService, create a static array of Jokes (we called it "database"), initialized to a half-dozen or so Joke instances. The `getJoke` method, taking a number parameter, should return the n-th item in the `database` array, and `getJokes` should return the entire array.

At this point, the domain models are finished. If you are not sure if you got it all to work, you can always fast-forward to the next lab by doing a `git checkout lab-2`.

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

