
//import {} from './libs.mjs';

export const challenge = {
    title: "Day One - Temperature conversion",
    description: "The temperature is dropping and elves have an optimum temperature for toy making. \
                  Unfortunately elves only know farenheit, while Santa only knows celsius. Help Santa \
                  out by writing code that will convert celsius to farenheit or farenheit to celsius. \
                  /nFill in the body of the function to return the correct values",
    
    boilerPlate: "return converTemp(args[0], args[1]); ",
    initial: "function convertTemp(degrees, unit) {/n/treturn degrees;/n}",

    args: [
        [100, 'f'],
        [100, 'c'],
        [0, 'f'],
        [0, 'c']
    ],

    setup: function() {},

    runTests: function(func) {
        for (const test of this.args) {
            if (Math.round(func(test)) != Math.round(this.test(test))) return false;
        }
        return true;
    },

    test: function(input) {
        if (input[1] === 'f') {
            return ((input[0] - 32) / 1.8);
        } else {
            return ((input[0] * 1.8) + 32);
        }
    }
}
