# PhilgoFamily

## Documents

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
ng s // normal run
ng s -c=hmr
````

## HMR enabled

* HMR is working for only scss files under `src/theme`.
  So, use get the benefit of SMACSS.

## CSS, SCSS and Design

* Use bootstrap only for rwd layout, d-flex, alignments.
* global SCSS files are under `src/theme` folder.
* All component must be declared in src/theme/components/***.scss
