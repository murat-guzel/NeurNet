const brain = require('brain.js')
const data = require('./data.json')

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({

    input : item.text,
    output : item.result

}));

network.train(trainingData,{
    iterations : 200
});

const result = network.run('Lebron James is the best')

console.log("Result : " + result);