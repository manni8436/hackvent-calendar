import { ChallengeManager } from './modules/eval.mjs';
import { CodeWindow } from './modules/codewindow.mjs';

import { setupAdvent } from './modules/advent.mjs';

const codeWindow = new CodeWindow(new ChallengeManager());

const windowText = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8,", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25"];
setupAdvent(windowText);

// Solve now button. Hides challenge brief and shows code panel
$("#show-code-panel").click(function() {
  codeWindow.showPage("code");
});

// Closing the code window
$("#code-window-wrapper").click(function (e) {
  if (e.target === this) codeWindow.close();
});
$("#close-code-window").click(codeWindow.close);

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

$("#code-submit").click(codeWindow.submitCode);

$("#back-btn").click(function() {
  codeWindow.showPage("challenge");
});

$("#retry-btn").click(function() {
  codeWindow.showPage("code");
});

$("#done-btn").click(codeWindow.close);

/**
 * Open code window on door click
 */
$(".door_holder").click(function () {
  const day = $(this).children(".door").data("day");
  codeWindow.loadChallenge(day);
});