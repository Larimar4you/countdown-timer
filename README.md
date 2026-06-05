# countdown-timer

This project contains two tasks from the Advanced JavaScript course topic:
asynchronous JavaScript, timers, and promises.

## Live Demo

[Open live page](https://larimar4you.github.io/countdown-timer/)

## Repository

[GitHub repository](https://github.com/Larimar4you/countdown-timer)

## Tasks

### 1. Countdown Timer

The timer allows the user to select a future date and time using `flatpickr`.

Main functionality:

- selecting date and time with a date picker;
- validation of the selected date;
- showing an error notification if the selected date is in the past;
- starting a countdown after clicking the Start button;
- updating days, hours, minutes, and seconds every second;
- disabling the input and button while the timer is running;
- stopping the countdown when the selected time is reached.

### 2. Promise Generator

The promise generator creates a promise based on the form input.

Main functionality:

- entering delay in milliseconds;
- selecting promise state: fulfilled or rejected;
- creating a promise after form submission;
- resolving or rejecting the promise after the selected delay;
- showing success or error notifications with `iziToast`.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Vite
- flatpickr
- iziToast
- GitHub Pages

## Project Structure

```text
src/
  css/
    reset.css
    styles.css
    home.css
    1-timer.css
    2-snackbar.css
  js/
    1-timer.js
    2-snackbar.js
  index.html
  1-timer.html
  2-snackbar.html
```

## Installation and Usage

Clone the repository:

```bash
git clone https://[github.com/Larimar4you/countdown-timer.git]
```

Go to the project folder:

```bash
cd countdown-timer
```

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Author

Created by [Larimar4you](https://github.com/Larimar4you).
