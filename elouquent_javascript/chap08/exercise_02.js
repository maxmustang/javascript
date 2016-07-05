"use strict"

const box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("The box still Locked!");
    return this._content;
  }
};


let showContent = (b) => {
    if(b.content.length == 0) {
        console.log("Its a trap! The box is locked")
        return b.content
    }  
} 

function withBoxUnlocked(body) {
    try {
        box.unlock()
        console.log("Box: locked ? ", box.locked)
        body(box)
    }catch(error){
        console.log(error.message)
    } finally {
        box.lock()
    }
}

withBoxUnlocked(showContent)
