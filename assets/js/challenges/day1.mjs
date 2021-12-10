
import { randomInt } from './libs.mjs';

export const challenge = {
    title: "Sort a list",
    description: "Write some code to sort the list 'input' in decending order.",

    setup: function() {
        // Generate a random sequence
        this.input = new Array(randomInt(45)).fill().map(()=>randomInt(25));
        return this.input;
    },

    test: function(comp) {
        return (comp.join('') === this.input.sort((a,b)=>b-a).join(''));
    }
}
