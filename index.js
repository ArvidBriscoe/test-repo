const prompt = require('prompt-sync')();

var hascorrectopinion = false;
var isbetter = prompt(`Is var better than let? Y/N: `);

while (hascorrectopinion == false) {
    if (isbetter != 'Y') {
        isbetter = prompt(`Incorrect. Is var better than let? Y/N: `);
        hascorrectopinion = false;
    }
    else if (isbetter == 'Y') {
        console.log(`Correct.`)
        hascorrectopinion = true;
    }
}