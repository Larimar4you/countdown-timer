import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datePicker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerFields = document.querySelectorAll('.timer .value');

startBtn.disabled = true;

let userSelectedDate = null;
let countdownInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate && userSelectedDate < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });

      startBtn.disabled = true;
      userSelectedDate = null;
      return;
    } else if (userSelectedDate) {
      startBtn.disabled = false;
    }
  },
};

flatpickr(datePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimer() {
  const now = new Date();
  const timeRemaining = userSelectedDate - now;

  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);

    timerFields.forEach(field => {
      field.textContent = '00';
    });

    startBtn.disabled = true;
    datePicker.disabled = false;
    userSelectedDate = null;
    startBtn.classList.remove('is-running');

    iziToast.success({
      title: 'Success',
      message: "Time's up!",
      position: 'topRight',
    });

    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeRemaining);

  timerFields[0].textContent = addLeadingZero(days);
  timerFields[1].textContent = addLeadingZero(hours);
  timerFields[2].textContent = addLeadingZero(minutes);
  timerFields[3].textContent = addLeadingZero(seconds);
}

startBtn.addEventListener('click', () => {
  if (userSelectedDate) {
    startBtn.disabled = true;
    datePicker.disabled = true;
    startBtn.classList.add('is-running');

    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
  }
});
