import { ChallengeManager } from './challenges/eval.mjs';

const challenges = new ChallengeManager();

$(document).ready(function () {

    // Calendar animation adapted from: https://codepen.io/dazulu/pen/ByoWee

    let words = ["Lorem ", "ipsum ", "delor", "sit", "amet", "consect", "adipisci", "elit,", "sed.", "Eiusmod", "tempor", "a", "enim", "minim", "season", "nulla", "dolore", "sint", "id", "est", "laboris", "ut.", "aute", "laborum", "toe"];

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

            // Add jiggle animation to current day window
            if (adventwindow === day) {
                $(this).addClass("current");
                $(this).addClass("jiggle");
            }

            // On clicking a window, toggle it open/closed and
            // handle other things such as removing jiggle and 25th
            $(this).on("click", function () {
                if (adventwindow <= day) {
                    $(this).children(".door").toggleClass("open");
                }

                $(this).removeClass("jiggle");

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
 * @param {*} day The day to trigger
 */
function showCodeWindow(day) {
    challenges.loadChallenge(day, loadChallengeData);
    $( "#code-window-wrapper" ).addClass("show");
}

/**
 * Callback for challenge module loading.
 * Fills out the window values.
 */
function loadChallengeData() {
    $( "#challenge-title" ).text(challenges.challenge.title);
    $( "#challenge-description").text(challenges.challenge.description);
    $( "#code-pane" ).val(challenges.challenge.initial);
}

    }

});