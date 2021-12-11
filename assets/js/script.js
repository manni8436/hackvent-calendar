import {
  ChallengeManager
} from './challenges/eval.mjs';

const challenges = new ChallengeManager();

$(document).ready(function () {

  // Calendar animation adapted from: https://codepen.io/dazulu/pen/ByoWee

  let words = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8,", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25"];

  let message = "";
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let scrolled = false;
  let timeDelay = 200;

  // function to reveal message
  let cardReveal = function () {
    $("#message").text(message).show();
  }

  //day=25; // uncomment to skip to 25

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
        message = message + " " + word;
      }

      // On clicking a window, toggle it open/closed
      $(this).on("click", function () {
        if (adventwindow <= day) {
          // I've changed this to add, because it seems clunky to open and 
          // close the door to reopen the code window for that day. - Sean
          $(this).children(".door").addClass("open");
        }

        // If 25th, can show the message
        if (day >= 25 && adventwindow === 25) {
          messageReveal();

          // Animate scroll to message if not already done
          if (!scrolled) {
            $('html, body').animate({
              scrollTop: $("#message").offset().top
            }, 2000);
            scrolled = true;
          }
        }
      });

    });

    // If beyond 24, show message
    if (day >= 26) {
      messageReveal();
    }
  }
});

/**
 * Shows the code window
 * @param {*} day: The day (1-25) to trigger
 */
function showCodeWindow(day) {
  challenges.loadChallenge(day, loadChallengeData, closeCodeWindow);
  // Removed timer as it interfers with preventing the code window
  // from opening if there's a load error. - Sean
  $("#code-window-wrapper").addClass("show");
  // Show the loading section
  $("#code-loading").addClass("show");
  $("body").addClass("code");
}

/**
 * Callback for challenge module loading.
 * Fills out the window values.
 */
function loadChallengeData() {
  $("#challenge-title").text(challenges.challenge.title);
  $("#challenge-description").text(challenges.challenge.description);
  $("#code-pane").val(challenges.challenge.initial);
  // Hide loading - show content
  $("#code-loading").removeClass("show");
  $("#challenge-content").addClass("show");
}

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
});

/**
 * Open code window on door click
 */
$(".door_holder").click(function () {
  const day = $(this).children(".door").data("day");
  showCodeWindow(day);
});