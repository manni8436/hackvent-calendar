
import { randomInt } from './libs.mjs';

export const challenge = {
    title: "Day Thirteen - Distance Dilemma part 1",
    description: "Santa is planning his route. He has the x and y coordinates of houses \
                  that he has to visit, and needs to workout the distance between them. \
                  Complete the function provided so that it returns the euclidean distance \
                  between the x and y points.",

    boilerPlate: "return distance(args[0],args[1],args[2],args[3]); ",
    initial: "function distance(x1, y1, x2, y2) {\n    return 0;\n}",

    args: [],

    setup: function() {
        for (let i = 0; i < 4; i++) {
            this.args.push(new Array(4).fill().map(()=>randomInt(100)));
        }
    },

    runTests: function(func, output= s => s) {
        output("Starting tests:\n");
        for (let i = 0; i < this.args.length; i++) {
            output(`Running test ${i+1}: `);

            const t1 = func(this.args[i][0],this.args[i][1],this.args[i][2],this.args[i][3]);
            const t2 = this.test(this.args[i][0],this.args[i][1],this.args[i][2],this.args[i][3]);

            if (t1 != t2) {
                output("Failed!\n");
                return false;
            }
            output("Succeeded!\n");
        }
        return true;
    },

    test: function(x1, y1, x2, y2) {
        const lx = x1 - x2;
        const ly = y1 - y2;
        return Math.sqrt(lx*lx + ly*ly);
    }
}
