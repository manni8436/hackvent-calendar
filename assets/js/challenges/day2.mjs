
//import {} from './libs.mjs';

export const challenge = {
    title: "Day Two - Sleigh scramble",
    description: "The elves are in a muddle. They've mixed up who is pulling the sleigh and who is leading it! \
                Complete the provided function. Remove 'Santa Claus' from the reindeer array and return the rest.",
    
    boilerPlate: "return getDeer(args[0]); ",
    initial: "function getDeer(reindeer) {\n    return reindeer;\n}",

    args: [
        ["Prancer", "Donner", "Vixen", "Cupid", "Dasher", "Santa Claus", "Comet", "Blitzen", "Rudolph"],
        ["Blitzen", "Donner", "Cupid", "Prancer", "Santa Claus", "Rudolph", "Vixen", "Comet", "Dasher"],
        ["Donner", "Vixen", "Cupid", "Prancer", "Santa Claus", "Dasher", "Blitzen", "Comet", "Rudolph"],
        ["Vixen", "Comet", "Blitzen", "Santa Claus", "Rudolph", "Prancer", "Donner", "Dasher", "Cupid"]
    ],

    setup: function() {},

    runTests: function(func, output=s=>s) {
        output("Starting tests:\n");
        for (const test of this.args) {
            output("Running: getDeer(): ");

            const t1 = func([...test]).join(',');
            const t2 = this.test([...test]).join(',');

            if (t1 != t2) {
                output("Failed!\n");
                return false;
            }
            output("Succeeded!\n");
        }
        return true;
    },

    test: function(reindeer) {
        reindeer.splice(reindeer.indexOf('Santa Claus'), 1);
        return reindeer;
    }
}
