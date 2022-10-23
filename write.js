const fs = require('fs')

const write = function(data= "None"){
    fs.writeFileSync('note.txt', data);

}
module.exports = write;