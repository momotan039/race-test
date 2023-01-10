const players = ["tahani", "sara", "ali", "shibly", "ahmad", "mousa", "rami", "tala", "hamdi", "talal"]

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
