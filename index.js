const cache = [];

function findGaavoCoinsRec(fare, pieces) {
    // this is a recursive approach to find pieces for fare
    if (fare === 0) {
        return [];
    }
   
    if (cache[`${fare}-${pieces}`]) {
        return cache[`${fare}-${pieces}`];
    }
    const result = [];
    //console.log('PiecesLen-',pieces.length);
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i]; 
        if (piece <= fare) {
            const remaining = fare - piece;
            const remainingChange = findGaavoCoinsRec(remaining, pieces.slice(i + 1)); 
            if (remainingChange !== null) { 
                return result.concat(piece).concat(remainingChange);
            }
        }
    } 
    cache[`${fare}-${pieces}`] = result.length === 0 ? null : result; 
    return result.length === 0 ? null : result;
}

const findGaavoCoins = (fare, pieces) => {
    const result = findGaavoCoinsRec(fare, pieces); 

    if (result === null || result.length === 0) {
        return "You cannot make the fare";
    }
    return result;
}

const readline = require('readline');
const { resourceLimits } = require('worker_threads');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to the CTA Ride Fare Utility');

rl.question('Enter fare amount: ', (fare) => {
    rl.question('Enter pieces separated by space: ', (pieces) => {
        const piecesArray = pieces.split(' ').map(piece => parseInt(piece));
//console.log('fare ',fare,typeof(fare));
console.log('piecesArray ',piecesArray,typeof(piecesArray));

        console.log(findGaavoCoins(fare, piecesArray));
        rl.close();
    });
});


module.exports = {
    findGaavoCoinsRec,
    findGaavoCoins
}
    