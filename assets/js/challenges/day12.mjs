/* jshint esversion:8, expr:true */
/*jshint multistr: true */

export const challenge = {
  title: "Day Twelve - Arrange Elves",
  description: "Help Santa to arrange elves in alphabetic order and make it more visible. \
                  As it is really difficult for Santa to read words without his glasses, \
                  put all names in upper case.' \
    ",

  boilerPlate: "return arrangeElves(args[0]); ",

  initial: "function arrangeElves(elves) {\n    return elvesUpper;\n}",

  args: [
    ['Sugarplum Mary', 'Shinny Upatree', 'Pepper Minstix', 'Bushy Evergreen', 'Alabaster Snowball', 'Wunorse Openslae'],
    ['Sugarplum Mary', 'Shinny UpAatREee', 'Pepper MinStix', 'Bushy Evergreen', 'Alabaster Snowball', 'Wunorse Openslae'],
    ['Wunorse Openslae', 'Sugarplum Mary', 'Pepper MinStix', 'Bushy Evergreen', 'Alabaster Snowball', 'Shinny UpAatREee']
  ],

  setup: function () {},



  runTests: function (func, output = s => s) {
    output("Starting tests:\n");
    for (const test of this.args) {
      output("Running: arrangeElves(elves): ");

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

  test: function (elves) {

    elves.sort();
    let elvesUpper = [];
    for (let elf of elves) {
      let elfUpper = '';
      elfUpper = elf.toUpperCase();
      elvesUpper.push(elfUpper);
    }

    return elvesUpper;
  }
};