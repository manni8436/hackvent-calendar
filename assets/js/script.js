
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
  // Only close if the wrapper was clicked, not if one of it's children recieved the event
  if (e.target === this) codeWindow.close();
});
$("#close-code-window").click(codeWindow.close);
$("#done-btn").click(codeWindow.close);

// Submit button - submit run and test user code
$("#code-submit").click(codeWindow.submitCode);

// Return to description from code pane
$("#back-btn").click(function() {
  codeWindow.showPage("challenge");
});

// Retry button - Return to code view
$("#retry-btn").click(function() {
  codeWindow.showPage("code");
});

// Open code window on door click
$(".door_holder").click(function () {
  const day = $(this).children(".door").data("day");
  codeWindow.loadChallenge(day);
});
