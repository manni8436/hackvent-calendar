/*jshint multistr: true */

export const challenge = {
  title: "Day Eleven - Send Christmas Cards",
  description: "Elves are overwhelmed with all chores that they have to do before the Christmas. \
                  Help them to send Christmas Cards to people. Santa gave them an example how to do it: \
                  'Dear Sarah,  Merry Christmas!' \
                  To do it faster, they need to create a class for all people and use congratulations() method\
                  Remember that Elves should be polite and use names correctly.' \
    ",

  boilerPlate: "return congratulateStranger(args[0]); ",

  initial: "function congratulateStranger(stranger) {\n    return mess;\n}",

  args: [
    'Dan', 'tim', 'Richard', 'mary', 'sunny', 'Daisy', 'mike', 'Chris'
  ],

  setup: function () {},



  runTests: function (func, output = s => s) {
    output("Starting tests:\n");
    for (const test of this.args) {
      output("Running: congratulateStranger(): ");

      const t1 = func(test);
      const t2 = this.test(test);

      if (t1 != t2) {
        output("Failed!\n");
        return false;
      }
      output("Succeeded!\n");
    }
    return true;
  },

  test: function (stranger) {
    class Human {
      constructor(name) {
        this.name = name
      }
      congratulations() {
        return `Dear ${this.name[0].toUpperCase() + this.name.slice(1)}, Merry Christmas!`
      }
    }

    let person = new Human(stranger)
    let mess = person.congratulations()
    return mess
  }
}