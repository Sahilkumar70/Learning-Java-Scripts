// Inheritance in JavaScript


class person {
    eat (){
        console.log("eating");
    }
    sleep (){
        console.log("sleeping");
    }
}
 
class engineer extends person {
work (){
    console.log("solving problems");
}
}

   let sahilobj = new engineer();