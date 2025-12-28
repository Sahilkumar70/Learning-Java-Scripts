 // callback hell 
 function getdata (dataid, getnextdata){
    setTimeout(() => {
        console.log("data", dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
}
getdata (1,()=>{
    console.log("getting data2");
    getdata (2,()=>{    
        console.log("getiing data3");
        getdata (3,()=>{
            console.log("getiing data4");
            getdata (4);
        })
    })
})