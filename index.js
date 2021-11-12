const prompt = require('prompt-sync')();

//Test comment for commmits

//Annoying Mr. Sharp
var hascorrectopinion = false;
var isbetter = prompt(`Is var better than let? Y/N: `);

//Annoying Mr. Sharp even more
while (hascorrectopinion == false) {
    if (isbetter != 'Y') {
        //unfortunately extra, unnecessary declaration of 'var' here would break the code
        isbetter = prompt(`Incorrect. Is var better than let? Y/N: `);
        hascorrectopinion = false;
    }
    else if (isbetter == 'Y') {
        console.log(`Correct.`)
        hascorrectopinion = true;
        //here you can see you will volunarily agree with me
    }
}
//mission annoy Mr. Sharp succesful