# PhilgoFamily

## Documents

* Keep in mind to practice [Angular Style Guide](https://angular.io/guide/styleguide)
* [How to multi apps in one project](https://docs.google.com/document/d/1UWgKjXkYA8kRwG9D71dSFdQ6iub93s6rLrCQTC0lPJs/edit#heading=h.ug0xdvs41gaw)

## TODO

* @confirm Make a multiple apps in one project since philgo has many sub sites.
* Message functionality and dsiplay no of unread mesages.
* Put css under each src/app/sub-site-1, src/app/sub-site-2, src/app/sub-site-3 folders.

## Install

```` sh
git submodule add https://github.com/thruthesky/angular-library
git submodule add https://github.com/thruthesky/philgo-api
git submodule add https://github.com/thruthesky/angular-wysiwyg-editor
````

## Run

```` sh
ng s // normal run with 4200 port
ng s main // normal run with main project.
ng s -c=hmr
ng s --port 4300 // run with 4300 port.
````

## HMR enabled

* HMR is working for only scss files under `src/theme`.
  So, use get the benefit of SMACSS.

## CSS, SCSS and Design

* Use bootstrap classes for rwd layout, d-flex, alignments only.
* global SCSS files are under `src/theme` folder.
* All component must be declared in src/theme/components/***.scss

## Apps - Default app and sub apps

* Default app is mostly coded for test purpose which is under `philgo-family/src` folder.
* Sub apps are in `philgo-family/projects/[app-name]`.
* The main app of `philgo-family` is `philgo-fmaily/projects/main`.

### Run, Build, Test

* All sub apps have same structures and commands to run, build, test.

```` sh
ng s [project]
ng build [project]
npm run e2e         ; cypress test for all sub apps.
````

### HMR for apps

* HMR of all sub apps is enabled by default in ng serve.
  Or it should be enabled in `environment.ts`.

### Layout of Template of Sub Apps

* Layout of app component template

```` html
<section class="layout">
<header>
  <nav></nav>
</header>
<router-outlet></router-outlet>
<footer>
  <nav>
  </nav>
</footer>
</section>
````

* Layout of lazy loaded templates.
  * Sidebars are included in lazy loaded templates.
    * In this way, we can freely customize the sidebars.

```` html
<main class="[page-name]">
  <header></header>
  <section class="body">
    <aside class="left"></aside>
    <section class="center content"></section>
    <aside class="right"></aside>
  </section>
  <footer></footer>
</main>
````

### SCSS of Sub Apps

* Since each app has HMR enabled by default, apps should take benefits of SCSS and HMR.
* SCSS files in each app are saved in `projects/[app]/src/scss`.
* `projects/[app]/src/style.scss` file loads all the scss files under `scss` folder.
* Defaults scss files are layout.scss, header.scss, footer.scss

## Main App
