//Promises
  // Are objects that allow to add callback functions to success or failure queues instead of calling a
  // callback function in response to the completion of an asynchronous
  // the difference of a promises to between a callback is that a promise is an object that gets
  // returned from the callee, instead of a function that gets passed into and invoked by the callee
  // promises shine when I need to orchestrate a complex sequence of events
  doMyAsyncStuff()
    .then(doThis)
    .then(doThat)
    .catch(handleError)
)
