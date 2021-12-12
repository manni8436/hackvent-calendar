// Any required library imports:
//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Day 20 - Countdown to Christmas Day",
    description:"Oh No! The elves' Christmas Day countdown clock has broken! \
                They need to know how many days they have left to work before Christmas Day, their only day off in the year! \
                Can you write a function that will calculate the number of days left until Christmas Day (25th December)?",

    // Code to be append to the user submission.
    // Here it converts the first argument to an input variable,
    // (so the user can access the first parameter as input instead of arg[0]).
    boilerPlate: "return countdownDays(args[0]);",

    // Code to be initial placed in the code panel
    initial: "function countdownDays() {\n    return countdownDays;\n}",

    // The argument list to be sent to user code. Should be an array of arrays.
    // The outer array is the individual tests, the inner array is the argument
    // list to be sent to the user code for each test.
    args: [
        [],
    ],

    /**
     * Performs any setup prior to running the tests. Can be used to generate
     * random inputs.
     */
    setup: function() {},

    /**
     * Iterates through the input list and runs the user code for each test.
     * Output is a callback function which accepts a string message as tests
     * are completed.
     * @param {function} func
     * @param {function} output
     * @returns {Boolean} false if any tests fail, otherwise true.
     */
    runTests: function(func, output) {
        output("Starting tests:\n");
        for (const test of this.args) {
            output("Running: triangleArea(): ");
            if (func([...test]) != this.test([...test])) {
                output("Failed!\n");
                return false;
            } else {
                output("Succeeded!\n");
            }
        }
        return true;
    },

    /**
     * Reference implementation. User code should provide the same result
     */
    // Credit: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php
    test: function() {
        today=new Date();
        var cmas=new Date(today.getFullYear(), 11, 25);
        if (today.getMonth()==11 && today.getDate()>25) 
        {
        cmas.setFullYear(cmas.getFullYear()+1); 
        }  
        var one_day=1000*60*60*24;
        let countdownDays = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
        console.log(countdownDays);
        return countdownDays;
    }
}
