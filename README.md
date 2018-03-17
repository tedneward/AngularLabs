# AngularLabs

This README file contains the default Angular CLI-generated content, plus the lab instructions for each step. Each lab step is tagged with a branch, so to start on the first lab, simply `git checkout master`, examine the README file for the instructions, and begin.

## Lab 3: Master-Detailing the Jokes

In this lab, we will build the remainder of the canonical "master-detail" style application, by adding behavior to the JokeListComponent to place a click-target to bring up a new component, the JokeDetailComponent, that will show off each individual Joke in its glory and splendor. While we could go ahead and emit a standard HTML hyperlink using an `href` tag, that wouldn't be nearly as exciting as doing it in a more Angular fashion; instead, we will make the text of the setup "clickable", and trap the click handler. (Yes, it's a pretty weak reason--perhaps you would prefer we pretend that the customer requested it this way?)

First we must modify the JokeListComponent to emit a hyperlink to the (not-yet-created) JokeDetailComponent, which will require two steps:

* *Modfy the JokeListComponent HTML template.* 
  * Remove the HTML that displays the punchline and the setup, so we have an empty `div` tag. Place a paragraph (`p`) that has as its child text the template-expression (curly-bracketed syntax) for the joke's setup.

* *Make the joke's setup text clickable.* 
  * In the paragraph tag you just created, add a `click` event-handler (rounded-bracket/parentheses syntax) and have it call a (not-yet-written) method, `showJoke`. Pass in the current joke (`joke`) to the method.

* *Modify the JokeListComponent by adding a showJoke() method.* 
  * Add a method to JokeListComponent called `showJoke` that takes a `Joke` object as its only parameter. (Note: The name of the method is irrelevant, so long as it is the same name specified in the event-handler from the previous step. Likewise, you could write this method to take a Joke ID as a parameter instead of the Joke object itself, but then somewhere along the line somebody--either the JokeListComponent or the JokeDetailComponent--will need to get the Joke from the JokeService, and since we already have it here, why not pass it directly?) The body of `showJoke` should use an Angular Router instance to route the user over to the (not-yet-written) JokeDetailComponent using `navigate`, targeting "/jokes/##", where "##" is the Joke ID, which we can conveniently extract from the passed-in Joke object.

* *Modify the JokeListComponent by injecting the JokeService and the Router.* 
  * This is done by simply declaring them as constructor parameters. Mark them as `private` in the constructor parameter syntax to auto-generate properties for them as well. Recall that in the previous lab, you created a new JokeService for use; now, since Angular will inject one for you (and it will always be the same one, which can be important for Repositories), use this injected JokeService instance in your `ngOnInit` method to get the full joke list.

* *Modify the AppModule to tell Angular that the JokeService is injectable.* 
  * In the AppModule (`app.module.ts`), the `@NgModule` decorator has an empty `providers` array. JokeService must be listed in this array if Angular is going to know that AppService is injectible.

* *Modify the AppModule to include the possible routes.* 
  * Angular also has to know what routes are used in the application, which means we have to create an array of them in the AppModule file. Typically this array is named `appRoutes`, declared as an instance of the type `Routes`, outside the AppModule class (at file scope), and is initialized in-place using object literals. This array will never be modified, so declare it as a `const` field. Inside this routes array, declare three routes: the path 'jokes' that maps to the component JokeListComponent; the path 'jokes/:jokeId' that maps to the component JokeDetailComponent, and a catch-all route that redirects to 'jokes'. When this is done, remember to add the routes to the AppModule's `@NgModule` decorator as one of the `imports` array.

  * If you've not already, try reloading the application. Clicking on the joke setup text will generate an error, but everything else should work as advertised. Now let's add the JokeDetailComponent to show the Joke off in all its splendor and glory.

* *Generate the JokeDetailComponent.* 
  * By this point, you're probably getting familiar with this step: `ng generate component JokeDetail`. Again, a new subdirectory is created, and again, four files (HTML, CSS, component code and component test code) are generated.

* *Inject the necessary services.* 
  * In the JokeDetailComponent's constructor, add a `private` parameter for a JokeService, and add another one for an `ActivatedRoute`. (The latter is how we will get which ID was passed to us from the JokeListComponent.)

* *Modify the JokeDetailComponent to work around a Joke instance as its model.* 
  * This is nothing more than adding a Joke-typed field. We called our field "joke", but of course you are free to call yours whatever you wish--just remember this name when we modify the JokeDetailComponent's HTML template.

* *Obtain the Joke instance out of the JokeService using the ID passed in through the ActivatedRoute.* 
  * In the JokeDetailComponent's `ngOnInit`, we can get hold of the ActivatedRoute that was used to bring up this component by using the `route`'s `snapshot` property to examine the `params` object there, and dereference the `jokeId` key.

* *Modify the JokeDetailComponent's HTML template.* 
  * The last step is to actually display the joke. Just create a paragraph (`p`) that has the joke setup and punchline in it, similar to what we had in the JokeListComponent before this lab.

* *Modify the AppComponent HTML template.* 
  * Instead of the `app-joke-list` tag in the template, use `router-outlet` so Angular knows to be looking for Angular Routing use.

At this point, the master-detail are finished. If you are not sure if you got it all to work, you can always fast-forward to the next lab by doing a `git checkout lab-4`.

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


