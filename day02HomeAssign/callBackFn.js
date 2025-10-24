let browser="Chrome"

function checkBrowserVersion(callback){

console.log ("checking browser version...")

  setTimeout(() => {
    // Simulate delay (3 seconds)
    callback("Browser version is: " + browser + " v1.1");
  }, 3000);
}

function showBrowserVersion(message) {
  console.log(message);
}


checkBrowserVersion(showBrowserVersion);