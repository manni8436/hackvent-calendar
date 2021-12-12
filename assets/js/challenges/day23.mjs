//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Day Twenty-three - Naughty list",
    description: "Santa’s been making a list and now he’s checking them twice.\
    He’s got a list of all the children and another with just the naughty children.\
    Help him out by writing a function that returns a list with just the children that deserve presents.\
    Fill in the body of the function to return the correct values",

    boilerPlate: "return naughtyNice(args[0],args[1]); ",
    initial: "function naughtyNice(list,naughtyList) {\n    return nice;\n}",

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
