/* jshint esversion:8, expr:true */
/*jshint multistr: true */

export const challenge = {
  title: "Day Twenty-one - Santa's Mile Mix Up",
  description: "Last Christmas Mrs Claus bought Santa a new routing system.\
                Unfortunately she bought it in Europe and Santa’s sleigh uses miles. \
                Help Santa out by writing an algorithm that converts kilometers into miles.\
                For the purposes of this test a mile is equivelent to 1.6km\
                Fill in the body of the function to return the correct values",

  // Code to be append to the user submission.
  // Here it converts the first argument to an input variable,
  // (so the user can access the first parameter as input instead of arg[0]).
  boilerPlate: "return milesToKm(args[0]); ",

  // Code to be initial placed in the code panel
  initial: "function milesToKm(miles) {\n    return kilometers;\n}",

  // The argument list to be sent to user code. Should be an array of arrays.
  // The outer array is the individual tests, the inner array is the argument
  // list to be sent to the user code for each test.
  args: [
    [1000],
    [1500],
    [800],
    [3756]
  ],

  /**
   * Performs any setup prior to running the tests. Can be used to generate
   * random inputs.
   */
  setup: function () {},

  /**
   * Iterates through the input list and runs the user code for each test.
   * @param {function} func 
   * @returns {Boolean} false if any tests fail, otherwise true.
   */
  runTests: function (func, output = s => s) {
    for (const test of this.args) {
      output(`Running: milesToKm(${test}): `);
      if (func(test) != this.test(test)) return false;

      const t1 = Math.round(func(test[0], test[1]));
      const t2 = Math.round(this.test(test[0], test[1]));

      if (t1 != t2) {
        output("Failed!\n");
        return false;
      }
      output("Succeeded!\n");
    }
    return true;
  },

  /**
   * Reference implementation. User code should provide the same result
   */
  test: function (miles) {
    return miles * 1.6;
  }
};