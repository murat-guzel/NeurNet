const brain = require('brain.js')
const data1 = require('./data/en1.json')
const data2 = require('./data/en2.json')
const data3 = require('./data/en3.json')
const data4 = require('./data/en4.json')
const data5 = require('./data/en5.json')
const data6 = require('./data/en6.json')
const network = new brain.recurrent.LSTM();

const Rounds = [];
class Round {
    constructor(keyHome ,keyAway,scoreHome,scoreAway) {
        this.keyHome = keyHome;
        this.keyAway = keyAway;
        this.scoreHome = scoreHome;
        this.scoreAway = scoreAway;
    }
 }

 BindData(data1);
 BindData(data2);
 BindData(data3);
 BindData(data4);
 BindData(data5);
 BindData(data6);


function BindData(data){

    for(i=0; i< data.rounds.length ;i++){

        for(j=0; j< data.rounds[i].matches.length ;j++){
    
            Rounds.push(
                new Round(
                    data.rounds[i].matches[j].team1.key,
                    data.rounds[i].matches[j].team2.key,
                    data.rounds[i].matches[j].score1,
                    data.rounds[i].matches[j].score2
                    )
                )
        }      
    
    }

}


 

const trainingData = Rounds.map(item => ({

    input : [item.keyHome,item.keyAway],
    output : [item.scoreHome,item.scoreAway]

}));

network.train(trainingData,{
    iterations : 10
});


var result = network.run(["chelsea","sunderland"])

console.log("Result : " + result[0]+" - "+result[1]);