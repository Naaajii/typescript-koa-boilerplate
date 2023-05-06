# How?
```
git clone git@github.com:Naaajii/typescript-koa-boilerplate.git
cd typescript-koa-boilerplate
npm i
```
# But, but - Why?
I find myself in alot of situations where I need to start a new project & there's so much to configure all the time so I decided to make this repo for starter Koa w Typescript. I end up giving up on projects but that's another story..

# Other Utilities

Use the following commands to install any other libraries to go along with starter.

## Koa Router
```
npm i koa-router
npm i @types/koa__router --save-dev

yarn add @koa/router
yarn add @types/koa__router --dev

pnpm add @koa/router
pnpm add @types/koa__router -D
```

## Koa Bodyparser
```
npm i koa-bodyparser
npm i @types/koa-bodyparser --save-dev

yarn add koa-bodyparser
yarn add @types/koa-bodyparser --dev

pnpm add koa-router
pnpm add @types/koa-router -D
```

## Koa Logger
```
npm i koa-logger
npm i @types/koa-logger --save-dev

yarn add koa-logger
yarn add @types/koa-logger --dev

pnpm add koa-logger
pnpm add @types/koa-logger -D
```

# Other Helpful 
To begin with this, this was suppose to have other things included like [husky](https://github.com/typicode/husky), [husky](https://github.com/typicode/husky) & [husky](https://github.com/typicode/husky) but I didn't want to include them in same folder so I'm probaby gonna make new branches for these tools & it's for future as well.

# Folder Structure
```
│
├── src
│   ├── index.js (Server File)
├── dist (Build for distribution)
├── node_modules
├── package.json
├── package-lock.json 
├── nodemon.json
└── .gitignore
```