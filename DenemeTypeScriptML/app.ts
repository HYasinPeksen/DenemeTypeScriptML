import * as brain from "brain.js";
import * as fs from 'fs';

const FILE_NAME = 'data.json';

class MachineLearning {
    neuralNetwork: brain.NeuralNetwork;

    constructor() {
        this.neuralNetwork = new brain.NeuralNetwork();
    }

    run(data: any): any {
        const output = this.neuralNetwork.run(data);
        return output;
    }

    loadFromFile(filename: string) {
        const file = fs.readFileSync(filename);
        const data = file.toString();
        this.neuralNetwork.fromJSON(data as unknown as brain.INeuralNetworkJSON);
    }
}

function waitAndClose(time: number) {
    setTimeout(function () {
        process.exit();
    }, time);
}


var data = {};
const ml = new MachineLearning();
ml.loadFromFile(FILE_NAME);
const result = ml.run(data);
console.log(result);

waitAndClose(50000);
