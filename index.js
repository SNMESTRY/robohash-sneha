var fs = require('fs')
const superagent = require('superagent')

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomText(length) {
    let output = 'a';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        output += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return output;
}



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
//let text = randomText(5)

  // 3. async await

async function getRoboPic() {
    try {
      const res1 =  superagent.get(`https://robohash.org/${randomText(5)}/random/image`)
      const res2 =  superagent.get(`https://robohash.org/${randomText(5)}/random/image`)
      const res3 =  superagent.get(`https://robohash.org/${randomText(5)}/random/image`)

      const all =await Promise.all([res1,res2,res3]);
      const images = all.map((el) => el.request.url);
      console.log(images);

      //console.log('robot image is ', res.request.url)
      await writeFilePromise('./robotImage.txt', images.join("\n"));
      console.log('sucessfully written the file')
    } catch (err) {
      throw err
    }
    
  }
 (async () => {
    try {
      await getRoboPic()
      console.log('end')
    } catch (err) {
      console.log(' end due to error')
    }
  })() 

// 2. promise

  /* return superagent.get(`https://robohash.org/${randomText(5)}/random/image`)

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

 /* superagent
 .get(`https://robohash.org/${randomText(5)}/random/image`)
         .then((res) => {
           console.log('robot image is ', res.request.url)
           fs.writeFile('./robotImage.txt', res.request.url, () => {
           console.log('sucessfully written the file')
     })
 })
*/

     
   
