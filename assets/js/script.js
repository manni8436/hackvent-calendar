import {
  ChallengeManager
} from './challenges/eval.mjs';

const challenges = new ChallengeManager();

$(document).ready(function () {

  // Calendar animation adapted from: https://codepen.io/dazulu/pen/ByoWee

  const words = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8,", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25"];

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;

  let timeDelay = 200;

  // Only work in December
  if (month === 12) {
    // Loop through each calendar window
    $("li").each(function (index) {
      let adventwindow = index + 1;
      let item = $(this);

      // Open past windows
      if (day !== adventwindow && adventwindow < day) {
        window.setTimeout(function () {
          item.children(".door").addClass("open");
        }, timeDelay);
      }

      // timeout offset for past window opening animation
      timeDelay += 100;

      // Add words so far to message variable
      if (adventwindow <= day) {
        let word = words[index];
        $(this).append('<div class="revealed">' + word + '</div>');
      }

      // On clicking a window, toggle it open/closed
      $(this).on("click", function () {
        if (adventwindow <= day) {
          // I've changed this to add, because it seems clunky to open and 
          // close the door to reopen the code window for that day. - Sean
          $(this).children(".door").addClass("open");
        }
      });

    });
  }
});

/**
 * Shows the code window
 * @param {*} day: The day (1-25) to trigger
 */
function showCodeWindow(day) {
  challenges.loadChallenge(day, loadChallengeData, closeCodeWindow);
}

/**
 * Callback for challenge module loading.
 * Fills out the window values.
 */
function loadChallengeData() {
  $("#code-window-wrapper").addClass("show");
  $("body").addClass("code");

  $("#challenge-title").text(challenges.challenge.title);
  $("#challenge-description").text(challenges.challenge.description);
  $("#code-pane").val(challenges.challenge.initial);

  $("#challenge-content").addClass("show");
}

/**
 * Solve now button. Hides challenge brief and shows code panel
 */
$("#show-code-panel").click(function() {
    // Hide challenge brief
    $("#challenge-content").removeClass("show");
    // Show code panel
    $("#code-content").addClass("show");
});

/**
 * Hides code window
 */
function closeCodeWindow() {
  $("#code-window-wrapper").removeClass("show");
  $("body").removeClass("code");

  $("#code-loading").removeClass("show");
  $("#challenge-content").removeClass("show");
  $("#code-content").removeClass("show");
  $("#output-content").removeClass("show");

  $("#challenge-title").text("");
  $("#challenge-description").text("");
  $("#code-pane").val("");
}
$("#code-window-wrapper").click(function (e) {
  if (e.target === this) closeCodeWindow();
});
$("#close-code-window").click(closeCodeWindow);

/**
 * Adds tab functionality to the textarea
 */
$("#code-pane").keydown(function (e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    const start = this.selectionStart;
    const end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) + "    " + this.value.substring(end);

    // put caret at right position again
    this.selectionStart = this.selectionEnd = start + 4;
  }
});

/**
 * Submits the user code for evaluation
 */
$("#code-submit").click(function () {
  // Hide code panel
  $("#code-content").removeClass("show");
  // Show output panel
  $("#output-content").addClass("show");
  // Ensure the output panel is clear
  $("#code-output").val("");
  // Run code
  const success = challenges.evaluate($("#code-pane").val(), updateOutput);
  if (success) updateOutput("\nAll tests run: Challenge complete!");
  else updateOutput("\nChallenge failed!");
});

/**
 * Back to description button
 */
$("#back-btn").click(function() {
  $("#challenge-content").addClass("show");
  $("#code-content").removeClass("show");
});

$("#retry-btn").click(function() {
  // Hide code panel
  $("#code-content").addClass("show");
  // Show output panel
  $("#output-content").removeClass("show");
  // Ensure the output panel is clear
  $("#code-output").val("");
});

$("#done-btn").click(closeCodeWindow);

/**
 * Updates the output panel as the users code is evaluated
 * @param {String} output 
 */
function updateOutput(output) {
  const text = $("#code-output").val() + output;
  $("#code-output").val(text);
}

/**
 * Open code window on door click
 */
$(".door_holder").click(function () {
  const day = $(this).children(".door").data("day");
  showCodeWindow(day);
});