const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        //going to call from index, file path starts in project's folder
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message:'file created'
            });
        });
    });
};

module.exports = writeFile;