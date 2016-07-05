 var figlet = require("figlet");
 
 figlet.text("Max bolado", function(error, data) {
    if (error)
      console.error(error);
    else
      console.log(data);
});