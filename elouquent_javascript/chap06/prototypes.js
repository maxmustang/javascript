"use strict"
// a prototype is  other object used as properties fallback
// when I call a propertie in a object that dont have this properties settled
// the object will try to find the propertie on its prototype

var empty = {}
empty.toString
// it will find the function toString()
// but when we call it as a method
// it wil do a toString of a empty object

empty.toString()
// [Object object]

// Object.create is used to create a object with a specific prototype

var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" +
                line + "'");
} };

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer"; 
killerRabbit.speak("SKREEEE!");