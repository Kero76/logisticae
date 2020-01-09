[![npm version](https://img.shields.io/npm/v/@kero76/logisticae)](https://www.npmjs.com/package/@kero76/logisticae)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/Kero76/logisticae/blob/master/LICENSE)

# Logisticae

Library who contains many algorithms about mathematics, physics, electricity, etc.

## Algorithms founds in Logisticae

### In Mathematics

- Pythagorean Theorem and his converse.
- Intercept Theorem  also known as Thales's Theorem and his converse.
- Euclidean algorithm to compute the Greatest Common Divisor between 2 numbers.
- LCM algorithm to compute the Least Common Multiple between 2 numbers.
- Implementation of an algorithm to check if a number is a prime number or not.
- Implementation of Lucas-Lehmer algorithms to check if a number is a Mersenner number.
- Implementation of line slope computation.

### In Physics

- An simple converter to convert distance, liter or weight unit to another one.
- Implementations of Ohm's law to compute voltage, intensity, power and/or resistance of a electric circuit.
- Add method to convert degree unit into another one.

### In Literature

- A simple algorithm to reverse the text. By example, the text *Hello World !* became *! dlroW olleH*.
- An algorithms to verify if a text is a palindrome. A palindrome is a text can be read and each letters are at the same place from *left to right* or *right to left* like the word **kayak** or the sentence **Ah, Satan sees Natasha**.

## Installation

You can get this library on npm.
To download it, you just type the commmand  
`$ npm i @kero76/logisticae`

## Documentations

### Local access

If you work locally with this library, you can generate yourself the documentation thanks to this command  
`$ npx typedoc --out docs src --mode file --module commonjs`

### Web access

You can consult the API of the library to following this link : [https://kero76.github.io/logisticae/](https://kero76.github.io/logisticae/).
This version is update after each release of the API.  
:warning: If you use the `develop` branch content, you must generate yourself the documentation or reading the source code to using correctly this API.

## Useful commands

- Command use to compile the project :  
  `$ npm run build` or `$ tsc`
- Command use to execute the unit tests :  
  `$ npm test` or  `$ npm run test`
- Command use to execute the code coverage :  
  `$ npm run coverage`
- Command use to execute the linter :  
  `$ npm run lint`
- Command use to generate the documentation :  
  `$ npm run docs` or `$ npx typedoc --out docs src --mode file --module commonjs`

## Changelog

You can see more information about versions on the [CHANGELOG.md](https://github.com/Kero76/logisticae/blob/master/CHANGELOG.md).

- v0.3.0 : Stringae update.
- V0.2.0 : Physicae update.
- V0.1.0 : Mathematicae update.

## License

This project is under MIT License.

## Author(s)

- Nicolas GILLE : <nic.gille@gmail.com>
