var timerPom = 25;
var breakPom = 5;
var pomodoro = timerPom * 60;
var countPom;
var mins;
var secs;

function setTimer() {
	"use strict";
  mins = Math.floor(pomodoro / 60);
  secs = pomodoro % 60;

  $("#min").html((mins < 10 ? '0' : '') + mins);
  $("#sec").html((secs < 10 ? '0' : '') + secs);

  if (pomodoro === 0) {
    clearInterval(countPom);
    breakTime();
  } else {
    pomodoro = pomodoro - 1;
  }
}

function setBreak() {
	"use strict";
  mins = Math.floor(pomodoro / 60);
  secs = pomodoro % 60;

  $("#min").html((mins < 10 ? '0' : '') + mins);
  $("#sec").html((secs < 10 ? '0' : '') + secs);

  if (pomodoro === 0) {
    clearInterval(countPom);
    resetTimer();
  } else {
    pomodoro = pomodoro - 1;
  }
}

function breakTime() {
	"use strict";
  $("#min").text(breakPom);
  $("#sec").text("00");
  $("#mode").text("Breaktime");
  $("#mode").css({
    "color": "rgb(160, 100, 210)"
  });
  pomodoro = breakPom * 60;
  countPom = setInterval("setBreak()", 1000);
  $("#min").css({
    "color": "rgb(240, 200, 100)"
  });
  $("#colon").css({
    "color": "rgb(240, 200, 100)"
  });
  $("#sec").css({
    "color": "rgb(240, 200, 100)"
  });
}



function startTimer() {
	"use strict";
  countPom = setInterval("setTimer()", 1000);
  $("#mode").text("Countdown");
  $("#mode").css({
    "color": "rgb(40, 110, 180)"
  });
}

function stopTimer() {
	"use strict";
  clearInterval(countPom);
}

function resetTimer() {
	"use strict";
  $("#min").text(timerPom);
  $("#sec").text("00");
  clearInterval(countPom);
  startTimer();
  pomodoro = timerPom * 60;
  $("#min").css({
    "color": "rgb(100, 200, 100)"
  });
  $("#colon").css({
    "color": "rgb(100, 200, 100)"
  });
  $("#sec").css({
    "color": "rgb(100, 200, 100)"
  });
}

$("#start").click(function() {
	"use strict";
  startTimer();
});

$("#reset").click(function() {
	"use strict";
  resetTimer();
});

$("#pause").click(function() {
	"use strict";
  stopTimer();
});

$("#breakSub").click(function() {
	"use strict";
  if (breakPom > 0) {
    breakPom -= 1;
    $("#min2").html(breakPom);
    clearInterval(countPom);
    pomodoro = breakPom * 60;
  }
});

$("#breakAdd").click(function() {
	"use strict";
  breakPom += 1;
  $("#min2").html(breakPom);
  clearInterval(countPom);
  pomodoro = breakPom * 60;
});

$("#durationSub").click(function() {
	"use strict";
  if (timerPom > 0) {
    timerPom -= 1;
    $("#min3").html(timerPom);
    $("#min").text(timerPom);
    clearInterval(countPom);
    pomodoro = timerPom * 60;
  }
});

$("#durationAdd").click(function() {
	"use strict";
  timerPom += 1;
  $("#min3").html(timerPom);
  $("#min").text(timerPom);
  clearInterval(countPom);
  pomodoro = timerPom * 60;
});