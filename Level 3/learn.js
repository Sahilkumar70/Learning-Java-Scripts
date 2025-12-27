 // Using class
 class car {
     start(){
console.log("start");
    }
    stop(){
        console.log("stop");
    }
    set brand(tata){
        this.carbrand = tata;
    }
 }
 let fortuner = new car();
 fortuner.brand = "Tata";
 console.log(fortuner);
