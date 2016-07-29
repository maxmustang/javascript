// page 81
//   Plug-ins
//     Loader plug-ins are an AMD mechanism that allow you to load non javascript resouces, such as templates and css.
//     To use plug-ins, simply prefix the file path with the plug-in name

'use strict'
const test = require('tape')
require(['chap004/mymodules.js', 'text!chap004/mymodule.html'], (myModule, view) => {
  let container = document.body
  let css = 'chap004/mymodule.css'

  myModule.render(container, view, css)
  test('amd plug-ins', t => {
    t.equal($('#mymodule').text(), 'Hello World')
    t.end()
  })
})
