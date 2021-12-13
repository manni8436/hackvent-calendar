
/*
 * This is a template for the advent challenge definitions.
 */

// Any required library imports:
//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Day 17 - List Length",
    description:"Santa needs to know how many houses he needs to visit! \
                Write a javascript function that finds the length of his nice list, \
                and assigns the length to the variable 'houses'.",

    // Code to be append to the user submission.
    // Here it converts the first argument to an input variable,
    // (so the user can access the first parameter as input instead of arg[0]).
    boilerPlate: "return listLength(args[0]);",

    // Code to be initial placed in the code panel
    initial: "function listLength(names) {\n    return houses;\n}",

    // The argument list to be sent to user code. Should be an array of arrays.
    // The outer array is the individual tests, the inner array is the argument
    // list to be sent to the user code for each test.
    args: [
        ["Sean", "Julia", "Manni", "John", "Alison"],
        ["Julia", "Manni", "John", "Alison", "Sean", "Barry"],
        ["Manni", "John", "Alison", "Sean"],
        ["Alison", "Julia", "Manni"],
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
            output("Running: listLength(): ");
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
    test: function(names) {
        let houses = names.length;
        return houses;
    }
}
