let varName="madam"
let splitName= varName.split('')
let rev=""


for (let i=splitName.length-1;i>=0;i--){

rev=rev+ splitName[i]





}
console.log("This is a reverse :"+rev)

switch (true) {
    case rev==varName:
        console.log("This is a palindrome")
        
        break;

    case rev!=varName:
        console.log("This is not a palindrome")
        
        break;

    default:
        break;
}