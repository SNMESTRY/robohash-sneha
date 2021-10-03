var fs = require('fs')
const superagent = require('superagent')

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomText(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let text= console.log(randomText(5));

//1. callback hell


       superagent
         .get(`https://robohash.org/${text}`)
         .then((res) => {
           console.log('robot image is ', res.request.url)
           fs.writeFile('./robotImage.txt', res.request.url, () => {
           console.log('sucessfully written the file')
          })
         })
     
   
