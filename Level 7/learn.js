// promises with setTimeout

function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log("data".dataid);
            resolve("success");
            if(getnextdata){
                getnextdata();
            }
        }, 5000);
});
}