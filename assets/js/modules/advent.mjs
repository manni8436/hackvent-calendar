
// Calendar animation adapted from: https://codepen.io/dazulu/pen/ByoWee
export function setupAdvent(words) {
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
          // Sound from Zapsplat.com https://www.zapsplat.com/music/card-chocolate-filled-advent-calender-door-open/
          // Play door open audio
          let audioDoor = new Audio("assets/audio/dooropen.mp3");
          audioDoor.play();
        }
      });

    });
  }
}
