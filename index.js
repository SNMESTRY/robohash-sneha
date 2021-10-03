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

function writeFilePromise(fileLocation, result) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileLocation, result, (err) => {
        if (err) {
          reject('not able to write to the file')
        }
        resolve()
      })
    })
  }


  // 3. async await

async function getDogPic() {
    try {
      const res = await superagent.get(`https://robohash.org/${text}`)
    
      console.log('robot image is ', res.request.url)
      await writeFilePromise('./robotImage.txt', res.request.url)
      console.log('sucessfully written the file')
    } catch (err) {
      throw err
    }
    
  }
 (async () => {
    try {
      await getDogPic()
      console.log('end')
    } catch (err) {
      console.log(' end due to error')
    }
  })()

// 2. promise

  /* return superagent.get(`https://robohash.org/${text}`)

   .then((res) => {
     console.log('robot image is ', res.request.url)
     return writeFilePromise('./robotImage.txt', res.request.url)
   })
   .then(() => {
     console.log('sucessfully written the file')
   })
   .catch((err) => {
     console.log(err)
   })
*/

//1. callback hell

 /*  superagent
 .get(`https://robohash.org/${text}`)
         .then((res) => {
           console.log('robot image is ', res.request.url)
           fs.writeFile('./robotImage.txt', res.request.url, () => {
           console.log('sucessfully written the file')
     })
 })

 */
     
   
