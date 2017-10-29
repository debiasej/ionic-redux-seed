# Ionic Redux Seed

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects using the Redux pattern to manage the app state. This app was generated with [Ionic CLI](https://github.com/ionic-team/ionic-cli) so all `ionic serve|build|lint|generate|etc.` commands apply.


## How to run this template

#### Prerequisites

* [TypeScript](https://www.typescriptlang.org/#download-links)
* [cordova](https://www.npmjs.com/package/cordova)(installed globally)
* [ionic](https://github.com/ionic-team/ionic) (installed globally)

```bash
$ sudo npm install -g ionic cordova
$ npm install
```

### a) Run app in development mode:

#### With NPM:

```bash
$ npm start
```
Open `http://localhost:8100` in your browser (preferrably latest Chrome version)

#### With Ionic CLI:

```bash
$ ionic serve
```
Open `http://localhost:8100` in your browser (preferrably latest Chrome version)

### a) Run app on a real device:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.



## Available Commands

| Command                     | Description                                               |
|-----------------------------|-----------------------------------------------------------|
| npm install                 | Installs dependencies with npm                            |
| npm start                   | Starts the dev server on localhost:8100                   |
| npm run build               | A complete build of the application. It uses development settings by default. Use --prod to create an optimized build       |
| npm clean             	  | Empty the www/build directory.                            
| npm lint                    | Runs tslint                                               
| npm run todo                | Show undone project TODOS                          
 
 
## Code Styleguide
* We're following the official [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html) as closely as possible by using [Codelyzer](https://www.npmjs.com/package/codelyzer) which checks the code when running `npm lint`.
* We're following [the redux paradigm](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) of dumb/stateless **components** and smart/stateful **containers**. Typically the top-level container of a feature (e.g. `product-details.container.ts`) will be connected to the @ngrx store and pass the state down to child components (e.g. `product-image.component.ts`). So top-level components that are directly connected to the redux store and do data-fetching etc. will be called `container` and unconnected components will be called `component`.
* We're using [Prettier](https://github.com/prettier/prettier) so all developer's code is formatted the same way. Please check [here](https://github.com/prettier/prettier#editor-integration) how to enable it for your IDE

## Code Location
We're using component-centric code co-location. That means, to keep our application code as decoupled as possible we're putting everything that belongs to a component together:

```
src
├── product-details
│   ├── product-details.container.ts
│   ├── product-details.e2e.ts
│   ├── product-details.module.ts
│   ├── product-details-routing.module.ts
│   ├── product-image
│   |    ├── product-image.component.ts
│   |    ├── product-image.html
│   |    ├── product-image.scss
│   |    ├── product-image.spec.ts
├── shared
│   ├── button
│   |    ├── button.component.ts
│   |    ├── button.component.html
│   |    ├── button.component.scss
│   |    ├── button.component.spec.ts
│   |    ├── button.icon.svg
```

## Managing State
We're using unidirectional data-flow via [@ngrx/store](https://github.com/ngrx/store) and [@ngrx/effects](https://github.com/ngrx/effects) to keep our state DRY and easy to reason about.

## Styling
* We're using SCSS (until `@angular/cli` adds PostCSS support…)
* We're keeping our styles component-specific and minimize global styles that can have unintended side effects
* The only global styles should be theme-relevant styles like variables, colors, fonts etc. which live in `src/theme` and can be imported into component-stylesheets via `@import "~theme/[variables|fonts|etc].scss";`

### Responsive behaviour
We are using the [include-media](include-media.com) mixin to manage our breakpoints. **Please don't use the `@angular/flex-layout` API**, since it is very limited and doesn't fit our layouts responsive behaviour.


### How to deploy to environments

* Dev: At every commit.
* Preproduction: `npm version X.Y.Z.rc-W` then `git push origin master --tags`
* Production: `npm version X.Y.Z` then `git push origin master --tags`





