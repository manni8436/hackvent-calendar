/* jshint esversion:8, expr:true */
/*jshint multistr: true */

export const challenge = {
  title: "Day Three - Fix Santa's list",
  description: "Santa messed up a bit with his computer and the list of children's names became one \
                  long word. Each name starts with a capital letter, and all other letters are lowercase. \
                  Complete the provided function to make Santa's list readable again by returning an \
                  array of the individual names.",

  boilerPlate: "return getNames(args[0]); ",
  initial: "function getNames(names) {\n    return names;\n}",

  args: [
    'JaneDaisyMikeSunnyRichardSusanDan',
    'LiamOliviaNoahEmmaOliverAvaWilliam',
    'SophiaElijahIsabellaJamesCharlotte',
    'BenjaminAmeliaLucasMiaMasonHarper'
  ],

  setup: function () {},

  runTests: function (func, output = s => s) {
    output("Starting tests:\n");
    for (const test of this.args) {
      output(`Running test ${this.args.indexOf(test)}: `);

      const t1 = func(test);
      const t2 = this.test(test).join(',');

      if (!Array.isArray(t1) || t1.join(',') != t2) {
        output("Failed!\n");
        return false;
      }
      output("Succeeded!\n");
    }
    return true;
  },

  test: function (names) {
    return names.split(/(?=[A-Z])/);
  }
};