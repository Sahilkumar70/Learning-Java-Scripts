// create an array to store companies bloomberg,microsoft,uber,ola,googl,ibm,netflix ?
// remove the first company from the array ?
// remove uber & add ola in its palace ?
// add amazon at the end ?
let companies = ["bloomberg", "microsoft", "uber", "googl", "ibm", "netflix"];
companies.shift(); // removes the first company
companies.splice(2,1,"ola"); // removes uber and adds ola
companies.push("amazon"); // adds amazon at the end
console.log(companies);