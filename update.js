const fs = require('fs')
const { isModuleNamespaceObject } = require('util/types')

const update = function(note, oldNote){
    const updateNote = JSON.parse(oldNote)

    const finalNote = updateNote.map(function(n,id) {
        if (n.id = note.id) {
            n.title = note.title
            n.body = note.body
            return n
        }
    })
    fs.writeFileSync('note.txt', JSON.stringify(finalNote))
}
module.exports = update