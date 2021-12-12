/*
 * This is a template for the advent challenge definitions.
 */

// Any required library imports:
//import { /* imports here */ } from './libs.mjs';


export const challenge = {
    title: "Day Two - What's the most popular toy? ",
    description: "It's almost Christmas and Santa and his elves still have a lot of toys to make. \
    But they don't know where to start. \
    Write a function that when passed an array of toys works out which is the most popular toy.\
    Fill in the body of the function to return the correct values",

    boilerPlate: "return mostPopular(args[0]); ",

    initial: "function mostPopular(toys) {\n    return mostPopularToy;\n}",

    args: [
        ["Rubix Cube", "Teddy Bear", "Jigsaw", "Teddy Bear", "Jigsaw","Teddy Bear"],
        ["Jigsaw", "Teddy bear", "Rubix Cube", "Jigsaw", "Jigsaw", "Teddy Bear"],
        ["Teddy Bear", "Rubix Cube", "Teddy Bear", "Jigsaw", "Teddy Bear", "Jigsaw",
            "Jigsaw", "Teddy bear", "Rubix Cube", "Jigsaw", "Jigsaw", "Teddy Bear"]
    ],

    setup: function () {},

    runTests: function (func, output=s=>s) {
        output("Starting tests:\n");
        for (const test of this.args) {
            output("Running: mostPopular(toys): ");
            if (func(test) != this.test(test)) {
                output("Failed!\n");
                return false;
            }
            output("Succeeded!\n");
        }
        return true;
    },

    test: function (toys) {
        toys.sort();
        let toysPop = [];
        let current = toys[0];
        let count = 0;
        let mostPopularToy = 0;
        for (let toy in toys) {
            if (current === toys[toy]) {
                count++;
                current = toys[toy];
            } else {
                toysPop.push([toys[toy], count])
                current = toys[toy]
                count = 1
            }
        }
        toysPop.push([toys[toys.length - 1], count])
        let mostPopCount = 0
        for (let x of toysPop) {
            if (x[1] > mostPopCount) {
                mostPopularToy = x[0]
                mostPopCount = x[1]
            }
        }
        return mostPopularToy
    }
}