const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {

         async getTextFromImage(imagePath) {
          const { createWorker } = require('tesseract.js');
          const worker = await createWorker();
          await worker.loadLanguage('eng');
          await worker.initialize('eng');
          const { data: { text } } = await worker.recognize(imagePath);
          console.log(text);
          await worker.terminate();
          return text

        },

        async compareImages({path1,path2,w,h,treshold=0.05}){
          console.log("start")
          var Jimp = require('jimp');

          let img1 = await Jimp.read(path1)
          .then(img1 => {
            return img1
              .resize(w, h) 
          })
          .catch(err => {
            console.error(err);
            return false;
          })
          let img2 = await
            Jimp.read(path2)
            .then(img2 => {
              return img2
                .resize(w, h)
            })

            var distance = Jimp.distance(img1, img2)
            var diff = Jimp.diff(img1, img2);
            var result = false;

            if (distance < treshold || diff.percent < treshold) {
            result =true
            }
            return new Promise(resolve => {
  
                resolve(result);
            });
        }
          });
        }
      }
  },
);
