const fs = require('fs');

const read = function(){
    return fs.readFileSynch("note.txt", 'utf8')
}

module.exports = read