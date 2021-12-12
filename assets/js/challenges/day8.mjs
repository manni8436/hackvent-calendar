
import { randomInt } from './libs.mjs';

export const challenge = {
    title: "Day Eight - Production Pressure part 2",
    description: "Now that Santa can calculate a single day's production percentage, \
                  he needs to check the average over several days. Complete the function \
                  provided so that it returns the average percentage over the given \
                  number of days. The function takes two arrays, the list of targets \
                  and the list of actual toy production. It should return the average \
                  percentage of the targets reached.",

    boilerPlate: "return percentage(args[0], args[1]); ",
    initial: "function percentage(targets, toys) {\n    return targets;\n}",

    args: [],

    setup: function() {
        for (let i = 0; i < 4; i++) {
            const length = randomInt(14);
            this.args.push({
                targets: new Array(length),
                toys: new Array(length)
            });

            for (let j = 0; j < length; j++) {
                const first = randomInt(1000);
                this.args[i].targets[j] = first;
                this.args[i].toys[j] = randomInt(1000);
            }
        }
    },

    runTests: function(func, output=s=>s) {
        output("Starting tests:\n");
        for (let i = 0; i < this.args.length; i++) {
            output(`Running test ${i+1}: `);

            const p1 = this.args[i].targets;
            const p2 = this.args[i].toys;
            const t1 = Math.round(func(p1, p2));
            const t2 = Math.round(this.test(p1, p2));

            if (t1 != t2) {
                output("Failed!\n");
                return false;
            }
            output("Succeeded!\n");
        }
        return true;
    },

    test: function(targets, toys) {
        const percentages = [];

        for (let i = 0; i < targets.length; i++) {
            percentages.push( ((toys[i] / targets[i]) * 100) )
        }

        return percentages.reduce((p,c) => p+=c) / percentages.length;
    }
}
