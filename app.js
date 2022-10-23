const add = require('./add')
const read = require('./read')
const present = require('./present')
const update = require('./updata')

const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {

    note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5],
    }

    var oldNote = read()

    add(note, oldNote)
}

if(cmd[2] == 'read') {
    present(read())
}

if (cmd[2] == 'update') {

    const note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5],
    }
    const oldNote = read()
    update(note, oldNote)
    let present = require('./present')
    present(read())
}