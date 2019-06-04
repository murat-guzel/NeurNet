const brain = require('brain.js')
const data1 = require('./en1.json')
const data2 = require('./en2.json')
const data3 = require('./en3.json')
const data4 = require('./en4.json')
const data5 = require('./en5.json')
const data6 = require('./en6.json')
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

for(i=0; i< data1.rounds.length ;i++){

    for(j=0; j< data1.rounds[i].matches.length ;j++){

        Rounds.push(new Round(data1.rounds[i].matches[j].team1.key,data1.rounds[i].matches[j].team2.key,
            data1.rounds[i].matches[j].score1,data1.rounds[i].matches[j].score2))
    }      

}
for(i=0; i< data2.rounds.length ;i++){

    for(j=0; j< data2.rounds[i].matches.length ;j++){

        Rounds.push(new Round(data2.rounds[i].matches[j].team1.key,data2.rounds[i].matches[j].team2.key,
            data2.rounds[i].matches[j].score1,data2.rounds[i].matches[j].score2))
    }      

}
for(i=0; i< data3.rounds.length ;i++){

    for(j=0; j< data3.rounds[i].matches.length ;j++){

        Rounds.push(new Round(data3.rounds[i].matches[j].team1.key,data3.rounds[i].matches[j].team2.key,
            data3.rounds[i].matches[j].score1,data3.rounds[i].matches[j].score2))
    }      

}
for(i=0; i< data4.rounds.length ;i++){

    for(j=0; j< data4.rounds[i].matches.length ;j++){

        Rounds.push(new Round(data4.rounds[i].matches[j].team1.key,data4.rounds[i].matches[j].team2.key,
            data4.rounds[i].matches[j].score1,data4.rounds[i].matches[j].score2))
    }      

}
for(i=0; i< data5.rounds.length ;i++){

    for(j=0; j< data5.rounds[i].matches.length ;j++){

        Rounds.push(new Round(data5.rounds[i].matches[j].team1.key,data5.rounds[i].matches[j].team2.key,
            data5.rounds[i].matches[j].score1,data5.rounds[i].matches[j].score2))
    }      

}
for(i=0; i< data6.rounds.length ;i++){

    for(j=0; j< data6.rounds[i].matches.length ;j++){

        Rounds.push(new Round(data6.rounds[i].matches[j].team1.key,data6.rounds[i].matches[j].team2.key,
            data6.rounds[i].matches[j].score1,data6.rounds[i].matches[j].score2))
    }      

}


const trainingData = Rounds.map(item => ({

    input : [item.keyHome,item.keyAway],
    output : [item.scoreHome,item.scoreAway]

}));

network.train(trainingData,{
    iterations : 200
});


var result = network.run(["chelsea","sunderland"])

console.log("Result : " + result[0]+" - "+result[1]);