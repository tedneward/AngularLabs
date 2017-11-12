# AngularLabs

## Future directions
There's a number of things you could do from here if you wanted to explore Angular in more depth:

* *Testing, testing, testing.* Yeah, we really should've been doing this all along. Go back to each of the .spec.ts files, and add some tests to make sure that your various refactorings that you want to do don't break anything. The tests could also use with a little refactoring themselves (the Joke tests, for example, create a new Joke each time, and that could be captured in a beforeEach, for example). 

* *Add Bootstrap.* Let's be honest, you didn't come to this workshop to see a beautiful paragon of user interface design; if you did, you were probably deeply disappointed. Throw some Bootstrap in there and make it look all pretty. (This will involve adding the Bootstrap CSS to the index.html, and making use of it in the HTML templates; if you customize Bootstrap in some way, you can do that in the Bootstrap CSS files, or by leveraging the component's CSS files.)

* *Use a middle-tier service.* Write some Express code that will be the HTTP API used to hold the data. (This is better than trying to access an HTTP database directly for a variety of reasons, although for some scenarios tha's a reasonable approach as well, particularly with a database like CouchDB.) Modify the JokeService to use Angular's HTTP facilities to access your Express middle-tier.

* *Rewrite parts of the application to make use of Reactive objects and Observables.* This is one of the trickier parts of Angular to grok, but well worth the investment in time.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

