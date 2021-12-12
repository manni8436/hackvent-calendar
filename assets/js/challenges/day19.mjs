// Any required library imports:
//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Day 19 - Triangle Area Calculation",
    description:"Uh Oh! Some names have been moved to the naughty list at the last minute!\
                Now the area that Santa needs deliver gifts to is a perfect triangle, and he needs to find out how big the area of the triangle is. \
                Luckily, the area is a perfect square! He knows that the length of 1 side of the square is 10,000 KM. \
                We know that the triangle's base = 7000 KM, and it's height = 9000 KM.\
                Complete the Javascript function to calculate the area of the triangle. \
                (You will need to define the base & height variables in your code)",

    // Code to be append to the user submission.
    // Here it converts the first argument to an input variable,
    // (so the user can access the first parameter as input instead of arg[0]).
    boilerPlate: "return triangleArea(args[0]);",

    // Code to be initial placed in the code panel
    initial: "function triangleArea() {\n    return area;\n}",

    // The argument list to be sent to user code. Should be an array of arrays.
    // The outer array is the individual tests, the inner array is the argument
    // list to be sent to the user code for each test.
    args: [
        [7000, 9000],
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
    test: function() {
        let base = 7000;
        let height = 9000;
        let area = (base * height) / 2;
        return area;
    }
}
