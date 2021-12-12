// Any required library imports:
//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Christmas Day - How Many Days Until Christmas",
    description: "Santa isn’t always that organised. \
    He always ends up leaving the presents to the last minute. \
    Write a function that works out exactly how many days there are left until christmas so he knows exactly how panicked he needs to be.\
    Fill in the body of the function to return the correct values",

    boilerPlate: "return daysTillXmas(args[0]); ",
    initial: "function daysTillXmas(date) {\n    return daysTill;\n}",

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
            output(`Running: milesToKm(${test}): `);
            if (func(test) != this.test(test)) return false;

            const t1 = Math.round(func(test[0],test[1]));
            const t2 = Math.round(this.test(test[0],test[1]));
            
            if (t1 != t2) {
                output("Failed!\n");
                return false;
            }
            output("Succeeded!\n");
        }
        return true;
    },
    /**
     * Reference implementation. User code should provide the same result
     */
    test: function(date){
            date = new Date(date);
            let year = date.getFullYear();
            let xmas = new Date(`${year}-12-25T03:24:00`);
            if (xmas.getTime() < date.getTime()){
              xmas = new Date(`${year+1}-12-25T03:24:00`);
            }
            
            let daysTill = (xmas.getTime()-date.getTime())/ 86400000;
            return daysTill
    }
}
