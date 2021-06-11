# eslint-rule-starter

Template for writing eslint rules

## Getting started

Yarn
```
yarn && yarn run lint
```

NPM
```
npm install && npm run lint
```

## Writing a rule

ESLint first parses code into an abstract syntax tree (AST) before checking any
rules. So to write a rule you must understand the AST representation of your code.

Use https://astexplorer.net/ to view AST of your code and also write new rules.

### Configuring https://astexplorer.net/

1. set parser (</>) to '@babel/eslint-parser'
2. set Transform option to 'ESLint v4'
3. paste sample code in the top-left pane
4. write eslint rule in bottom-left pane

## Scaffolding/Project Setup

- eslint rules must be in a separate package with their own package.json file
		In this example I have added the package with `yarn add --dev file:./packages/eslint-plugin-sample`
- the package name must start with `eslint-plugin-`
- add the package to package.json dependencies
- add the package as a plugin in .eslintrc.js without the `eslint-plugin-` prefix
