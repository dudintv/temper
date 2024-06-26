# Temper assignment from Dmitry Dudin

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/dudintv/temper)

## How to first time start in developing mode

```
git clone git@github.com:dudintv/temper.git
cd temper
yarn
yarn dev
```

## How to prepare it for production

```
yarn build
```

## How to run unit-tests

```
yarn test
```

## Used stack

I used the major required tools:
* Vue
* Tailwind
* Typescript

And also, I used:
* Vite — to simplify the pipeline
* Pinia — to organize the data storage (I could also use VueQuery but I choose Pinia this time to make it in a more "traditional" way)
* Vitest — a perfect accompaniment to Vite and it is very similar to Jest I used to work with
* AutoAnimate — to automatically make re-sorting animations as it was in the requirements

I manually made sorting and history keeping (I avoided using any library) to show some Typescript/Javascript skills.


## The project structure

* MailLayout
  * SortablePage
    * SortableList
      * SortableItem
        * SortableButton
    * HistoryList
      * HistoryListItem
          * HistoryButton
  
