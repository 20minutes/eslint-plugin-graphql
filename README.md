# @20minutes/eslint-plugin-graphql
[![Build Status](https://app.travis-ci.com/20minutes/eslint-plugin-graphql.svg?branch=deps-up-to-date)](https://app.travis-ci.com/20minutes/eslint-plugin-graphql)

An ESLint plugin that checks tagged query strings inside JavaScript, or queries inside `.graphql` files, against a GraphQL schema.

This is exactly the same plugin as [`eslint-plugin-graphql`](https://github.com/apollostack/eslint-plugin-graphql) but with dependencies up to date.

```
yarn add --dev @20minutes/eslint-plugin-graphql
```

Requirements:
- requires Node 12+
- requires GraphQL 15+

Configuration is the same but you need to use `@20minutes/graph` instead of `graph` in some places.

```js
// In a file called .eslintrc.js
module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    "@20minutes/graphql/template-strings": [/* ... */],
    "@20minutes/graphql/no-deprecated-fields": [/* ... */],
    "@20minutes/graphql/required-fields": [/* ... */],
  },
  plugins: [
    '@20minutes/graphql'
  ]
}
```
