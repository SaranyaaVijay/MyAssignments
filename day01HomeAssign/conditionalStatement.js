let browserName="Chrome"
if (browserName=="Chrome"){

console.log ("Launching Chrome browser")

} else{

    console.log("Launching default browser")
}

let testType="Smoke"

switch (testType) {
    case "Smoke":
        console.log("Running Smoke Tests")
        break;
    case "Sanity":
        console.log ("Running Sanity Tests")
        break
    case "Regression":
        console.log ("Running Regression Tests")   
        break  

    default:
        console.log("Running Default Smoke Tests")
        break;
}
