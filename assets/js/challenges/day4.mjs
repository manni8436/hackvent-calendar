
import { randomInt } from './libs.mjs';

export const challenge = {
    title: "Day Four - Find the most expensive gift",
    description: "The accountant Elf is demanding to know how much Santa is spending on gifts. \
                  Complete the function provided so that it returns the highest price in the \
                  gifts array.",
    
    boilerPlate: "return getHighestPrice(args[0]); ",
    initial: "function getHighestPrice(gifts) {\n    return gifts;\n}",

    args: [],

    setup: function() {
        for (let i = 0; i < 4; i++) {
            this.args.push(
                new Array( randomInt(15) ).fill().map( ()=>randomInt(100) )
            );
        }
    },

    runTests: function(func, output=s=>s) {
        output("Starting tests:\n");
        for (let i = 0; i < this.args.length; i++) {
            output(`Running test ${i+1}: `);

            const t1 = func([...this.args[i]]);
            const t2 = this.test([...this.args[i]]);

            if (t1 != t2) {
                output("Failed!\n");
                return false;
            }
            output("Succeeded!\n");
        }
        return true;
    },

    test: function(gifts) {
        gifts.sort((a,b)=>b-a);
        return gifts[0];
    }
}
