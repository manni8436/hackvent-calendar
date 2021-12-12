
/*
 * This is a template for the advent challenge definitions.
 */

// Any required library imports:
//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Christmas Day - How Many Days Until Christmas",
    description: "Santa isn’t always that organised. \
    He always ends up leaving the presents to the last minute. \
    Write a function that works out exactly how many days there are left until christmas so he knows exactly how panicked he needs to be.\
    Fill in the body of the function to return the correct values",

    // Code to be append to the user submission.
    // Here it converts the first argument to an input variable,
    // (so the user can access the first parameter as input instead of arg[0]).
    boilerPlate: "return daysTillXmas(args[0]); ",

    // Code to be initial placed in the code panel
    initial: "function daysTillXmas(args[0]) {\n    return daysTill;\n}",

    // The argument list to be sent to user code. Should be an array of arrays.
    // The outer array is the individual tests, the inner array is the argument
    // list to be sent to the user code for each test.
    args: [
        ['1997-11-24T03:24:00'],
        ['1995-12-24T03:24:00'],
        ['1995-12-26T03:24:00']
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
    runTests: function(func, output=s=>s) {
        output("Starting tests:\n");
        for (const test of this.args) {
            output(`Running: ${test}`);
            if (func(test) != this.test(test)) {
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
    test: function(input) {
        return false;
    }
}
