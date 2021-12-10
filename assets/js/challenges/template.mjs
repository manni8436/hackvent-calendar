
/*
 * This is a template for the advent challenge definitions.
 */

// Any required library imports:
//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Challenge Title Here",
    description: "Short Challenge description here",

    /**
     * Performs any setup and generates an argument list to
     * be given to the user submission code.
     * @returns Argument list to be passed to user code
     */
    setup: function() {
        return [ 0 ];
    },

    /**
     * Compares the user code output to the expected output
     * @param {*} comp - The output from the users submission 
     * @returns {Boolean} whether the user output matches the expected output
     */
    test: function(comp) {
        return false;
    }
}
