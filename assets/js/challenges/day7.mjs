/* jshint esversion:8, expr:true */
/*jshint multistr: true */

import {
  randomInt
} from './libs.mjs';

export const challenge = {
  title: "Day Seven - Production Pressure part 1",
  description: "The elves are behind on their toy production. He might need to hire \
                  contractors. Before that, he needs to work out how far behind they \
                  really are. Complete a function to work out what percentage of the \
                  the daily target has been reached.",

  boilerPlate: "return percentage(args[0], args[1]); ",
  initial: "function percentage(target, toys) {\n    return target;\n}",

  args: [],

  setup: function () {
    for (let i = 0; i < 4; i++) {
      this.args.push(new Array(2));

      const first = randomInt(1000);
      this.args[i][0] = first;
      this.args[i][1] = randomInt(first);
    }
  },

  runTests: function (func, output = (s) => s) {
    output("Starting tests:\n");
    for (let i = 0; i < this.args.length; i++) {
      output(`Running test ${i+1}: `);
      const p1 = this.args[i][0],
        p2 = this.args[i][1];

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

  test: function (target, toys) {
    return (toys / target) * 100;
  }
};