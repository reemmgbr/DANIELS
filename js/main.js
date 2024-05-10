function startCounters() {
  var customersCounter = document.getElementById("customers-counter");
  var projectsCounter = document.getElementById("projects-counter");
  var codeLinesCounter = document.getElementById("code-lines-counter");
  var filesCounter = document.getElementById("files-counter");

  var customersValue = 0;
  var projectsValue = 0;
  var codeLinesValue = 0;
  var filesValue = 0;

  setInterval(function () {
    customersCounter.innerHTML = ++customersValue;
  }, 100);

  setInterval(function () {
    projectsCounter.innerHTML = ++projectsValue;
  }, 150);

  setInterval(function () {
    codeLinesCounter.innerHTML = ++codeLinesValue;
  }, 50);

  setInterval(function () {
    filesCounter.innerHTML = ++filesValue;
  }, 200);
}
