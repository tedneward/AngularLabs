# AngularLabs

## About
This is a series of steps towards doing the Hands-On-Labs for Angular training. Each lab step is in its own Git branch, so that each step can be done independently if desired.

## Setup

If you are doing TypeScript and Angular for the first time, there are a few things you should have installed on your machine:

* [NodeJS](https://nodejs.org): Download the "LTS" (Long-Term Support) version for your platform, or use your platform's favorite package manager to install Node. If you have Node already installed, verify you have a relatively recent version by running `node -v`; anything after 6.x should work fine.

* [Git](https://git-scm.com): This lab assumes you have some familiarity with Git at the command-line, but not much is required. If you choose to use Git from a tool other than the command-line (such as from within SourceTree or VisualStudio), you will need to be able to check out branches.

* Text editor: You will need a text editor with which you are somewhat comfortable; I like [VSCode](https://code.visualstudio.com), but this is a topic of some discussion. The assumption is that during the labs, we will be running commands from the command-line, so if you use an editor with an integrated terminal, you may find it a more seamless/smooth experience.

* A recent version of a modern browser: Usually this means Chrome latest, but recent versions of any modern browser should also work.

Two additional steps that can either be done ahead of time or during the labs include:

* TypeScript: Once NodeJS is installed, you can install TypeScript to your machine by running `npm install -g typescript`. This will create a global command, `tsc`, the TypeScript compiler. Run `tsc --version` in a new command-line window to verify it was installed. (You may need to do it in a new command-line window because of how `npm` works on Windows.)

* Angular-CLI: This is a command-line tool for Angular projects, and we will be using it extensively. Install it by running `npm install -g @angular-cli`. (The "@" is not a typo.) Verify it is installed by running `ng version`.

Lastly, once all the dependencies are installed, make sure to do a `git clone` of this project.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

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

At this point, you are ready to begin the labs. If you are not sure if you got it all to work, you can always fast-forward to the next lab by doing a `git checkout lab-1`.
