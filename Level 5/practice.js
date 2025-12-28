// you are creating a website for your college create a class user with 2 properties name & emails.
//  it also has a method called view data () that allows user to view website data?
// some added questions in this question/
let data ="information";
class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData (){
        console.log("data=", data);
    }
}
class admin extends user {
    constructor(name,email){
        super(name,email);
    }
    editData (){
        data = "some new data";
    }
}
let student1 = new user ("sahil","sahil@gmail.com");
let student2 = new user ("sanjay","sanjay@gmail.com");
teacher = new user ("teacher","teacher@gmail.com");
admin = new admin ("admin","admin@gmail.com");

