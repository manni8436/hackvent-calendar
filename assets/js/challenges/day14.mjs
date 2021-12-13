/*jshint multistr: true */

import { randomInt } from './libs.mjs';

export const challenge = {
  title: "Day Fourteen - Distance Dilemma part 2",
  description: "Now that Santa can get the distance, he needs to sort them \
                  from longest to shortest. Complete the function to return an \
                  of all the distances sorted in descending order. The points \
                  will be passed in two arrays of objects of {x,y}.",

  boilerPlate: "return distance(args[0],args[1]); ",
  initial: "function distance(p1, p2) {\n    return sortedDist;\n}",

  args: [],

  setup: function () {
    for (let i = 0; i < 4; i++) {
      this.args.push(new Array());
      this.args[i].push(new Array());
      this.args[i].push(new Array());
      for (let j = 0; j < 6; j++) {
        this.args[i][0].push({
          x: randomInt(100),
          y: randomInt(100)
        });
        this.args[i][1].push({
          x: randomInt(100),
          y: randomInt(100)
        });
      }
    }
  },

  runTests: function (func, output = s => s) {
    output("Starting tests:\n");
    for (let i = 0; i < this.args.length; i++) {
      output(`Running test ${i+1}: `);

      const t1 = func(this.args[i][0], this.args[i][1]);
      const t2 = this.test(this.args[i][0], this.args[i][1]);

      if (t1.join(',') != t2.join(',')) {
        output("Failed!\n");
        return false;
      }
      output("Succeeded!\n");
    }
    return true;
  },

  test: function (p1, p2) {
    const distances = [];
    for (let i = 0; i < p1.length; i++) {
      const x = (p1[i].x - p2[i].x);
      const y = (p1[i].y - p2[i].y);
      distances.push(Math.sqrt((x * x) + (y * y)));
    }
    let sortedDist = distances.sort((a, b) => a - b);
    return sortedDist
  }
}
