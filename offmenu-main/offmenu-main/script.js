/* Small progressive enhancements. No network requests or data storage. */
'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navigation');
function closeNavigation(returnFocus = false) {
  navigation.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.querySelector('span').textContent = '+';
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('span').textContent = open ? '−' : '+';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeNavigation()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeNavigation(true);
});
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeNavigation(); });
window.matchMedia('(min-width: 901px)').addEventListener('change', () => closeNavigation());

const filters = document.querySelector('.menu-filters');
const dishes = [...document.querySelectorAll('.dish')];
filters.hidden = false;
filters.addEventListener('click', event => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  dishes.forEach(dish => {
    dish.hidden = button.dataset.filter !== 'all' && dish.dataset.category !== button.dataset.filter;
    if (!dish.hidden) count++;
  });
  document.querySelector('#menu-status').textContent = `${count} dishes shown: ${button.dataset.filter === 'all' ? 'all categories' : button.textContent.toLowerCase()}.`;
});

// Use the restaurant's date in India, including for visitors in other timezones.
const form = document.querySelector('#reservation');
const dateInput = form.elements.date;
const timeInput = form.elements.time;
const fields = [...form.querySelectorAll('input, select')];
const status = document.querySelector('#form-status');
let attempted = false;
function restaurantClock() {
  const parts = new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
  const value = type => parts.find(part => part.type === type).value;
  return {date:`${value('year')}-${value('month')}-${value('day')}`,minutes:Number(value('hour')) * 60 + Number(value('minute'))};
}
function timeMinutes(value) {
  const match = value.match(/^(\d{1,2}):(\d{2}) (AM|PM)$/);
  return match ? (Number(match[1]) % 12 + (match[3] === 'PM' ? 12 : 0)) * 60 + Number(match[2]) : -1;
}
function refreshDates() { dateInput.min = restaurantClock().date; }
refreshDates();
dateInput.addEventListener('focus', refreshDates);
form.querySelector('button[type=submit]').disabled = false;
function errorFor(field) {
  const value = field.value.trim();
  if (!value) return ({'full-name':'Please enter your full name.',email:'Please enter your email address.',date:'Please select a date.',time:'Please choose a time.',guests:'Please choose the number of guests.'})[field.id];
  if (field.id === 'full-name' && value.length < 2) return 'Please enter at least two characters.';
  if (field.id === 'email' && field.validity.typeMismatch) return 'Please enter a valid email address, such as you@example.com.';
  if (field.id === 'date') {
    if (value < restaurantClock().date) return 'Please choose today or a future date.';
    if (new Date(`${value}T12:00:00`).getDay() === 1) return 'We’re closed on Mondays. Choose Tuesday through Sunday.';
  }
  if (field.id === 'time' && dateInput.value === restaurantClock().date && timeMinutes(value) <= restaurantClock().minutes) return 'That time has passed in Vijayawada. Choose a later time or date.';
  if (!field.validity.valid) return 'Please check this field.';
  return '';
}
function validate(field) {
  const error = errorFor(field);
  document.getElementById(`${field.id}-error`).textContent = error;
  field.setAttribute('aria-invalid', String(Boolean(error)));
  return !error;
}
fields.forEach(field => {
  field.addEventListener('blur', () => { if (field.value || attempted) validate(field); });
  field.addEventListener('input', () => {
    status.textContent = '';
    status.classList.remove('error');
    if (attempted || field.getAttribute('aria-invalid') === 'true') validate(field);
    if (field === dateInput && attempted) validate(timeInput);
  });
});
form.addEventListener('submit', event => {
  event.preventDefault();
  attempted = true;
  refreshDates();
  const invalid = fields.filter(field => !validate(field));
  status.classList.toggle('error', invalid.length > 0);
  if (invalid.length) {
    status.textContent = 'A few details need attention. Please correct the highlighted fields above. Nothing has been sent.';
    invalid[0].focus();
    return;
  }
  const formattedDate = new Intl.DateTimeFormat('en-IN', {day:'numeric',month:'long',year:'numeric'}).format(new Date(`${dateInput.value}T12:00:00`));
  status.textContent = `Looking good, ${form.elements.fullName.value.trim()}! Your demo request for ${form.elements.guests.value} guest${form.elements.guests.value === '1' ? '' : 's'} on ${formattedDate} at ${timeInput.value} passes validation. This is a preview only: no reservation was created, no email was sent, and your details have not been stored.`;
  status.focus();
});

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), {threshold:0.08});
  document.querySelectorAll('.story-heading, .story-body, .section-intro, .experiment-detail, .experience-gallery, .quotes, .visit-copy').forEach(element => {
    element.classList.add('reveal-ready'); observer.observe(element);
  });
}
