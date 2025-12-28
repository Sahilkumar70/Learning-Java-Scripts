class person {
    constructor(name){
        this.species ="homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}
class engineer extends person {
    constructor(name){
        super(name);// to invoke person class constructor
    }
    work(){
        super.eat();
        console.log("solve problems");
    }
}
let engobg = new engineer("sahil");