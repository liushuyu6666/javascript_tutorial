const withdrawMoney = new Promise((resolve, reject) => {
    console.log("I go to back to withdraw money today");
    let queue = ["tom", "jack", "rose"];
    let balance = 500;
    let task1 = setInterval(() => {
        let withdraw = Math.random() * 500;
        balance -= withdraw;
        console.log(`${queue.shift()} withdraw ${withdraw}\n and here just ${balance} left`);

        if(balance < 100){
            reject("I can't withdraw enough money");
            // The clearInterval() method clears a timer set with the setInterval() method. not the task itself
            clearInterval(task1);
        }
        else if(queue.length == 0){
            resolve("I got 100 money back");
            clearInterval(task1);
        }
    }, 5000)
})

withdrawMoney.then((result) => {console.log(result)}).catch((result) => {console.log(result)})