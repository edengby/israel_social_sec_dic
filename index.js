fs = require('fs');

function getHeadZeros(num) {
    return num.toString().padStart(8, "0");
}

function addLastDigit(val) {
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        let digit = parseInt(val[i]);
        if (isNaN(digit))
            return;
        let result = digit * (i % 2 == 0 ? 1 : 2);
        while (result > 0) {
            sum += result % 10;
            result = parseInt(result / 10);
        }
    }
    return val + (10 - (sum % 10)) % 10;
}

for (let i = 0; i <40000001; i++) {
    const zeroNum = getHeadZeros(i);
    const withLastDig = addLastDigit(zeroNum);
    // console.log(withLastDig)
    fs.appendFileSync("tz.txt", withLastDig+"\n");
}



