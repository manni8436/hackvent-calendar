
//import {} from './libs.mjs';

export const challenge = {
    title: "Day One - Temperature conversion",
    description: "The temperature is dropping and elves have an optimum temperature for toy making. \
                  Unfortunately elves only know farenheit, while Santa only knows celsius. Help Santa \
                  out by writing code that will convert celsius to farenheit or farenheit to celsius. \
                  Complete the provided function to return the correct values. Degrees will be a number \
                  while unit will be either 'f' or 'c'. If unit is 'f' degrees is in farenheit and you \
                  need to return celsius and vice versa ",
    
    boilerPlate: "return convertTemp(args[0], args[1]); ",
    initial: "function convertTemp(degrees, unit) {\n    return degrees;\n}",

    args: [
        [100, 'f'],
        [100, 'c'],
        [0, 'f'],
        [0, 'c']
    ],

    setup: function() {},

    runTests: function(func, output=s=>s) {
        output("Starting tests:\n");
        for (const test of this.args) {
            output(`Running: convertTemp(${test}): `);

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

    test: function(degrees, unit) {
        console.log(degrees,unit);
        if (unit === 'f') {
            return ((degrees - 32) / 1.8);
        } else {
            return ((degrees * 1.8) + 32);
        }
    }
}
