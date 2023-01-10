const players=["tahani","sara","ali","shibly","ahmad","mousa","rami","tala","hamdi","talal"]
const selected=[];

function pickRunner(){

    let arr=[];
    // Returns a random integer from 0 to 9:
    while(arr.length<3){
        let num=Math.floor(Math.random() * 10)+1;
        if(arr.includes(num)==false){
            arr.push(num);
        }
    }

    return arr;
}

function getPlayers(){
const selected = [];
    count = 3;
    while (count > 0) {
        const i = Math.floor(Math.random() * 10)
        if (!selected.includes(players[i])) {
            selected.push(players[i])
            count--
        }
    }
    return selected;
}

function startRace() {
    const players=getPlayers()
}

startRace();

