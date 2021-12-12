
import { randomInt } from './libs.mjs';

export const challenge = {
    title: "Day Six - Average gift cost",
    description: "The accountant Elf is getting very stressed. He needs to know the \
                  average gift price now. Complete the function so that it returns \
                  cost of all the gifts in the gifts array.",
    
    boilerPlate: "return getAverageCost(args[0]); ",
    initial: "function getAverageCost(gifts) {\n    return gifts;\n}",

    args: [],

    setup: function() {
        for (let i = 0; i < 4; i++) {
            this.args.push(
                new Array( randomInt(15) ).fill().map( ()=>randomInt(100) )
            );
        }
    },

    runTests: function(func, output=(s)=>s) {
        output("Starting tests:\n");
        for (let i = 0; i < this.args.length; i++) {
            output(`Running test ${i+1}: `);

            const t1 = Math.round(func([...this.args[i]]));
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
        return Math.round(gifts.reduce((p,c)=>p+=c) / gifts.length);
    }
}