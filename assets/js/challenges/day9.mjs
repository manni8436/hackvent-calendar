
export const challenge = {
    title: "Day Nine - Snow crash",
    description: "Oh no! Santa's computer has crashed and now it's just \
                  spitting out binary numbers! In order to fix it you'll \
                  need to convert the binary number passed as a string in \
                  to decimal. Complete the function provided and return the \
                  number.",

    boilerPlate: "return binaryToNumber(args[0]); ",
    initial: "function binaryToNumber(binary) {\n    return 0;\n}",

    args: [
        '11011001',
        '10011100',
        '00110110',
        '01010101',
        '11111111',
        '00000000'
    ],

    setup: function() {},

    runTests: function(func, output=s=>s) {
        output("Starting tests:\n");
        for (let i = 0; i < this.args.length; i++) {
            output(`Running test ${i+1}: `);

            const t1 = Math.round(func(this.args[i]));
            const t2 = Math.round(this.test(this.args[i]));

            if (t1 != t2) {
                output("Failed!\n");
                return false;
            }
            output("Succeeded!\n");
        }
        return true;
    },

    test: function(binary) {
        let sum = 0;
        let pow = 1;
        for (let i = binary.length-1; i >= 0; i--) {
            const bit = (binary[i] === '1');
            sum += bit * pow;
            pow *= 2;
        }
        return sum;
    }
}
