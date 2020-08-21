const promiseExample = new Promise (function(resolve, reject){
    setTimeout(() => console.log(1), 2000);
    resolve("this is resolve");
    reject("this is reject");
})

// code in promise also be executed asynchronously, it can be regard as a if-else function
promiseExample.then(input => console.log(input)).catch(error => console.log(error))