/* jshint esversion:8, expr:true */
/*jshint multistr: true */

export const challenge = {
  title: "Day 16 - List Sorting",
  description: "Santa has a list of names on his nice list. \
                However, he wants to deliver presents in alphabetical order! \
                Can you write a javascript function that sorts the list 'names' alphabetically?",

  // Code to be append to the user submission.
  // Here it converts the first argument to an input variable,
  // (so the user can access the first parameter as input instead of arg[0]).
  boilerPlate: "return sortNames(args[0]);",

  // Code to be initial placed in the code panel
  initial: "function sortNames(names) {\n    return names;\n}",

  // The argument list to be sent to user code. Should be an array of arrays.
  // The outer array is the individual tests, the inner array is the argument
  // list to be sent to the user code for each test.
  args: [
    ["Sean", "Julia", "Manni", "John", "Alison"],
    ["Julia", "Manni", "John", "Alison", "Sean"],
    ["Manni", "John", "Alison", "Sean", "Julia"],
    ["Alison", "Julia", "John", "Sean", "Manni"],
  ],

  /**
   * Performs any setup prior to running the tests. Can be used to generate
   * random inputs.
   */
  setup: function () {},

  /**
   * Iterates through the input list and runs the user code for each test.
   * Output is a callback function which accepts a string message as tests
   * are completed.
   * @param {function} func
   * @param {function} output
   * @returns {Boolean} false if any tests fail, otherwise true.
   */
  runTests: function (func, output) {
    output("Starting tests:\n");
    for (const test of this.args) {
      output("Running: sortNames(): ");
      if (func([...test]).join(',') != this.test([...test]).join(',')) {
        output("Failed!\n");
        return false;
      } else {
        output("Succeeded!\n");
      }
    }
    return true;
  },

  /**
   * Reference implementation. User code should provide the same result
   */
  test: function (names) {
    names.sort();
    return names;
  }
};