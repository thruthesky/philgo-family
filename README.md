# PhilgoFamily

해야 할 것.
쪽지.

언어 번역 모듈
https://github.com/thruthesky/site/blob/master/src/app/providers/language.service.ts

## TODO

* Make a multiple apps in one project since philgo has many sub sites.
* Put css under each src/app/sub-site-1, src/app/sub-site-2, src/app/sub-site-3 folders.


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
