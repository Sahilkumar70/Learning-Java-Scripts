// how to use promises 
const getpromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am a promise");
        resolve("promise resolved");
    });
};

let promise = getpromise();
promise.then((res) => {
    console.log("promise fulfilled",res);
});

promise.catch((err) => {
    console.log("promise rejected",err);
});