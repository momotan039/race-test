const players=["tahani","sara","ali","shibly","ahmad","mousa","rami","tala","hamdi","talal"]
const selected=[];

function placeRunner( arrayNums) {
  return arrayNums.sort();
}


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
    const nums=placeRunner(pickRunner())
    let result=`Congrats! 
    ${players[2]} is first Place with the time of ${nums[2]}
    ${players[1]} is second Place with the time of ${nums[1]}
    ${players[0]} is third Place with the time of ${nums[0]}
    `;
    console.log(result)
}

startRace();
