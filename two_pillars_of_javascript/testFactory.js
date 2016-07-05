"use strict"

var fs = require('fs')
function route(fromUrl, toUrl){
    let from = fromUrl 
    let to = toUrl
    
    let stringit = () => from + ' ' + toUrl
    
    let showNotesHandler = (err, data) => {
        console.log('aeeee', data)
    }
    
    let showNotesCaller = (f) => fs.readFile('./part1', 'utf8', f || showNotesHandler)
    return {
        toString: stringit,
        showNotes:  showNotesCaller,
        getFromUrl: () => from,
        getToUrl: () => to,
        setToUrl: (newTo) => { to = newTo }
    }
}



let r = route('xis', 'ipsulon')
console.log(r.getToUrl())
r.setToUrl('brinca')
console.log(r.getToUrl())
