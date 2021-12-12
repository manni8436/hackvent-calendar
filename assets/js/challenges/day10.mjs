export const challenge = {
  title: "Day Ten - Elves' Report",
  description: "Elves has to count how many balls of each color they have to decorate their Christmas tree. \
                  They know that they have only red, blue, and yellow balls. Count how many balls they have got. \
                  And help them to send a message to Santa: 'We have ... red balls, ... blue balls, ... yellow balls.' \
    ",

  boilerPlate: "return arrangeBalls(args[0]); ",

  initial: "function arrangeBalls(arr) {\n    return message;\n}",

  args: [
    ['red', 'blue', 'yellow', 'blue', 'red', 'blue', 'red', 'blue', 'yellow', 'red',
      'yellow', 'blue', 'red', 'red', 'blue', 'yellow', 'yellow', 'red', 'red'
    ],
    ['red', 'blue', 'yellow', 'blue', 'red', 'blue', 'red', 'blue'],
    ['red', 'yellow', 'yellow', 'yellow', 'red', 'red', 'red', 'yellow'],
    ['red']
  ],

  setup: function () {},


  runTests: function (func, output = s => s) {
    output("Starting tests:\n");
    for (const test of this.args) {
      output("Running: arrangeBalls(arr): ");

      if (func(test) != this.test(test)) {
        output("Failed!\n");
        return false;
      }
      output("Succeeded!\n");
    }
    return true;
  },

  test: function (arr) {
    let redBalls = [];
    let blueBalls = [];
    let yellowBalls = [];
    for (let i of arr) {
      if (i === 'red') {
        redBalls.push(i)
      } else if (i === 'blue') {
        blueBalls.push(i)
      } else if (i === 'yellow') {
        yellowBalls.push(i)
      }
    }
    let message = `We have ${redBalls.length} red balls, ${blueBalls.length} blue balls, ${yellowBalls.length} yellow balls.`
    return message
  }
}