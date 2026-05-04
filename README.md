# Calculator

A simple web-based calculator built for The Odin Project.

## Overview

This project is a functional calculator app implemented using HTML, CSS, and JavaScript.
It supports numeric input, decimal values, basic arithmetic operations, percent conversion, clear/reset, and equals evaluation.

## Features

- Addition, subtraction, multiplication, and division
- Decimal input
- Percent calculation
- Square root (`√x`)
- Toggle sign (`+/-`)
- Clear button to reset the calculator
- On-screen display updates with the current input or result

## Usage

1. Open `calculator/index.html` in a web browser.
2. Use the on-screen buttons to enter numbers and operations.
3. Press `=` to evaluate the current expression.
4. Press `AC` to clear the current input.

## Project Structure

- `index.html` — main calculator UI and button layout
- `css/style.css` — styling for calculator appearance and layout
- `js/index.js` — calculator logic and event handling

## Implementation Details

- `js/index.js` uses state variables such as `currentInput`, `firstValue`, `operator`, and `shouldResetInput`
- Button clicks are handled by event listeners attached to `.calculator-button`
- Arithmetic operations are performed by the `operate()` function
- The `%` button converts the current input into a percentage value

## Notes

- The UI includes buttons for square root (`√x`) and negate (`+/-`), and the JavaScript implementation now supports both actions.

## Development

To make changes, update the files in the `calculator/` folder and refresh the browser to see the results.
