const fs = require('fs');

const read = function(){
    return fs.readFileSynch("Note.txt", 'utf8')
}
module.exports = read;