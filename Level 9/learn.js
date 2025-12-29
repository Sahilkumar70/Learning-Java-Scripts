// async await

function api (){
    return new promise ((resolve,reject)=>{
        setTimeout (()=>{
            console.log ("get wheather");
            resolve (200);
        },2000);
    });
}

async function getwheatherdata(){
    await api ();
    await api ();
}