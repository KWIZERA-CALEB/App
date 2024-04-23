const monthEl = document.getElementById('month-name');
const dayEl = document.getElementById('day-name');
const yearEl = document.getElementById('year');
const dayNumberEl = document.getElementById('day-number');

const date = new Date();
const month = date.getMonth();

monthEl.innerText = date.toLocaleDateString('en', {
    month: 'long'
})

dayEl.innerText = date.toLocaleDateString('en', {
    weekday: 'long'
})

dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();