

function fetchDataFromDatabase(){
    return new Promise ((resolve,reject) =>{
console.log("Fetching data from database...");
setTimeout(()=>{

const data=true
if (data){
   resolve("Data fetched successfully!")
}
else{

    reject("Data not found!")
}

},3000)





})
}
fetchDataFromDatabase()
.then((message)=>console.log(message))
.catch(error=> console.log(error))