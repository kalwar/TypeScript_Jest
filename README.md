# PalindromeChecker TS using Jest

A very simple PalindromeChecker TypeScript Test using Jest

### Requirements

- Create a palindrome checker
- It should be able to detect that a string is a palindrome
- Words like `Madam` is palindromes
- Words like `Boss` is not palindromes
- It should still know that something is a palindrome even if casing is off e.g. even if it is `Madam` or `madam`
- It should also be able to detect palindromes in phrases like `Was It A Rat I Saw`
  and `Never Odd or Even`

### Features

- Minimal
- TypeScript v4
- Testing with Jest

### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.
