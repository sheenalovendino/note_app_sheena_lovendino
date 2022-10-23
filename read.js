const fs = require('fs');

const read = function(){
    return fs.writeFileSynch("note.txt", 'utf8')
}

module.exports = read