
import { setupAdvent, setWindow } from './modules/advent.mjs';
import { ChallengeManager } from './modules/eval.mjs';
import { ChallengeStorage } from "./modules/storage.mjs";
import { CodeWindow } from './modules/codewindow.mjs';

const storage = new ChallengeStorage();
const codeWindow = new CodeWindow(new ChallengeManager(), storage);

const windowText = generateWindowText();

// Generates text for the advant windows based on saved state
function generateWindowText() {
  const windows = [];
  for (let i = 1; i <= 25; i++) {
    windows.push({
      day: i,
      started: storage.hasUserStartedChallenge(i),
      complete: storage.getChallengeSuccess(i)
    });
  }
  return windows;
}
setupAdvent(windowText);

// Load sound settings
$( "#sound-toggle" ).prop('checked', storage.getSoundSetting());

// Save sound settings
$( "#sound-toggle" ).change(function() {
  storage.setSoundSetting($( this ).prop("checked"));
});

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
