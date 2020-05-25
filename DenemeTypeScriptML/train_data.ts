import * as brain from 'brain.js';
import * as fs from 'fs';


const FILE_NAME = 'data.json';

interface TrainDataType {
    input: any,
    output: any
}


class TrainData {
    neuralNetwork: brain.NeuralNetwork;
    data: TrainDataType[];
    constructor(data: TrainDataType[]) {
        this.data = data;
        this.neuralNetwork = new brain.NeuralNetwork();
    }

    train() {
        console.log('Started training.');
        this.neuralNetwork.train(this.data);
        console.log('Finished training.');
    }

    toJSON(): brain.INeuralNetworkJSON {
        return this.neuralNetwork.toJSON();
    }

    saveData(filename: string) {
        console.log('Saving data.');
        fs.writeFile(filename, this.toJSON(), function (err) {
            if (err) {
                if (err == null)
                    console.log('Data saved successfully.');
                else
                    console.log(err);
            }
        });
    }
}

var trainingData: TrainDataType[] = [{
    input: 0,
    output: 0
}];

const training = new TrainData(trainingData);
training.train();
training.saveData(FILE_NAME);

