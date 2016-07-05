// begins in bind.js

const lightbulb = {
  toggle: function toggle() {
      this.isOn = !this.isOn
      return this.isOn
  },
  isOn: false
}

let toggle = lightbulb.toggle,
  lightswitch = document.getElementById('id')


//the problem is that, the context from a event listner
// aka the `this`, that will be used inside the toggle method
// will be the lightswitch.clicked scope
lightswitch.addEventListener('click', toggle, false)

// to corret it, I must say change the toggle for it use
// the lightbulb context

let toggle = lightbulb.toggle.bind(lightbulb)
let lightswitch = document.getElementById('id')
lightswitch.addEventListener('click', toggle, false)
