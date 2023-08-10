# Symbol Code Test

A Node.js program takes JSON object as input and converts that into HTML.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Introduction

This Node.js application aims to convert JSON into corresponding HTML code.

## Features

- Parse external file containing JSON
- Convert parsed JSON object into HTML code
- Unit testing of core functionalities using Jest

## Installation

Clone the repo by this command
```bash
git clone https://github.com/harrisrui/symbol.git
cd symbol
npm install
```

No 3rd party libraries are used except Jest for testing. To see the test results, run this command.

```sh
npx jest
```
or run specfic test suites, e.g.

```sh
npx jest HTMLFormatter.test.js
```

## Usage

To run the application, execute this command

```sh
node src/main.js myobject.txt
```

## Contribution
Welcome any contribution for further improvement of codebase.
 
## Licence
