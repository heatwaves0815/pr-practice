# pr-practice

A tiny playground repo for practicing the GitHub pull request workflow.

## What's here

`sum.js` exports a single function, `sum(a, b)`, that adds two numbers and
returns the result. It's intentionally simple so the focus stays on the PR
process, not the code.

## Usage

```bash
node -e "console.log(require('./sum').sum(2, 3))"
```

## Running tests

```bash
node test/sum.test.js
```

Contributions that improve clarity, fix typos, or add missing test coverage
are wellcome.
