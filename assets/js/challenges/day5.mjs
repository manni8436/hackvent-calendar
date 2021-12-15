/* jshint esversion:8, expr:true */
/*jshint multistr: true */

import { randomInt } from './libs.mjs';

export const challenge = {
  title: "Day Five - Total gift cost",
  description: "The accountant Elf now needs to know the total costs of all the gifts! \
                  Complete the function provided so that it returns the sum of all the \
                  gift prices in the gifts Array.",

  boilerPlate: "return getTotalCost(args[0]); ",
  initial: "function getTotalCost(gifts) {\n    return gifts;\n}",

  args: [],

  setup: function () {
    for (let i = 0; i < 4; i++) {
      this.args.push(
        new Array(randomInt(15)+5).fill().map(() => randomInt(100))
      );
    }
  },

  runTests: function (func, output = s => s) {
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

  test: function (gifts) {
    return gifts.reduce((p, c) => p += c);
  }
};
