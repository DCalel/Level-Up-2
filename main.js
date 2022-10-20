const data = document.querySelector(".data");
const button = document.querySelector(".btn");

var counter = 0;

function decrement() {
  counter--;
  if (counter < 0) {
    data.style.color = "red";
  }
  if (counter == 0) {
    data.style.color = "blue";
  }

  data.innerHTML = counter;
}

function reset() {
  counter = 0;
  if (counter == 0) {
    data.style.color = "blue";
  }
  data.innerHTML = counter;
}

function increase() {
  counter++;

  if (counter > 0) {
    data.style.color = "limegreen";
  }
  if (counter == 0) {
    data.style.color = "blue";
  }
  data.innerHTML = counter;
}
