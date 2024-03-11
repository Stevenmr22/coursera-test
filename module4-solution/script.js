(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  // Define helloSpeaker function
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };
  
  // Define byeSpeaker function
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log("Good Bye " + name);
  };
  
  // Loop over the names array and call either helloSpeaker's or byeSpeaker's 'speak' method
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  
  })();
  