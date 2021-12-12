
// Calendar animation adapted from: https://codepen.io/dazulu/pen/ByoWee
export function setupAdvent(windows) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;

  let timeDelay = 200;

  // Only work in December
  if (month === 12) {
    // Loop through each calendar window
    $("ul.cards_holder li").each(function (index) {
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
      setWindow(windows[index]);

      // On clicking a window, toggle it open/closed
      $(this).on("click", function () {
        if (adventwindow <= day) {
          // Sound from Zapsplat.com https://www.zapsplat.com/music/card-chocolate-filled-advent-calender-door-open/
          // Play door open audio
          if (!$(this).children(".door").hasClass("open")) {
            // Only play the sound if this door isn't open yet.
            if ($( "#sound-toggle" ).prop("checked")) {
              // Only play the sound if site is not muted.
              const audioDoor = new Audio("assets/audio/dooropen.mp3");
              audioDoor.play();
            }
          }
          $(this).children(".door").addClass("open");
        }
      });
    });
  }
}

function getWindowText(window) {
  let text = `Day ${window.day}`;
  if (window.complete) {
    text += "<br>Complete!";
  } else if (window.started) {
    text += "<br>Started";
  } else {
    text += "<br>Not started";
  }
  return text;
}

export function setWindow(window) {
  const elem = $( $(`ul.cards_holder li`).get(window.day-1) );
  elem.append(getWindowText(window));

  if (window.complete) {
    elem.addClass("complete");
  }
}