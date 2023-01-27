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
      })
    },
  },
});
