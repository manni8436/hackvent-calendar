//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Day Twenty-three - ",
    description: "Short Challenge description here",

    boilerPlate: "let input = args[0]; ",
    initial: "initial code goes here",

    args: [[]],

 
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


    test: function(input) {
        return false;
    }
}
