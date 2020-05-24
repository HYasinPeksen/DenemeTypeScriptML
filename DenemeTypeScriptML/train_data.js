import * as brain from "brain.js";
import * as fs from fs;


const net = new brain.NeuralNetwork();

net.train([
    { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 } },
    { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
    { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } },
]);

var data = net.toJSON();

fs.writeFile("test.txt",  , function (err) {
    if (err) {
        console.log(err);
    }
});

setTimeout(function () {
    process.exit();
}, 50000);