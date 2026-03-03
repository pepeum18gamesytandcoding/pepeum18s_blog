function showPage(pageId) {
  var pages = document.getElementsByClassName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  document.getElementById(pageId).style.display = 'block';
}

window.onload = function () {
  alert('WELCOME TO MY AWESOME WEBSITE!!!');
  showPage('home');
  increaseCounter();
};

function increaseCounter() {
  var count = localStorage.getItem('visitorCount');
  if (!count) count = 0;
  count++;
  localStorage.setItem('visitorCount', count);
  document.getElementById('counterNumber').innerText = count;
}

function randomBackground() {
  var colors = ['red', 'blue', 'green', 'purple', 'orange', 'black'];
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}
