const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector("js-greetings");

const USER_LS = "currentUser",
  SHOWIING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello $(text)`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not d
  } else {
    paingGreeting(currentUser);
  }
}

function init() {}

init();
