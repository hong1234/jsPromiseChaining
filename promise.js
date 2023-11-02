// Promise
function timeConsumingWork(){
    return new Promise(( resolve, reject ) => {
        const start = Date.now();
          
        // do a thing, possibly async , then..
        setTimeout(() => {
                const end = Date.now();
                const duration = end - start;
                if(duration > 1100){
                    reject(`Execution time ${duration} ms Error`)
                } else {
                    resolve(`Execution time ${duration} ms OK`)
                }
            }, 
            1000);
              
    })
}
  
// Promise using
  
timeConsumingWork().then(
    function (result) { 
        console.log("timeConsumingWork notify --");
        console.log('result:', result);
    },
    function (error) { 
        console.log("timeConsumingWork notify --");
        console.log('result:', error)
    }
);
  
console.log(`programm end`);
  
//  Output:
//  programm end
//  timeConsumingWork notify --
//  result: Execution time 1002 ms OK
//  result: Execution time 1201 ms Error
  
  
  
// Promise using with async/await (JS-8)
  
async function promiseWrapper() {
    try {
        let r1 = await timeConsumingWork()
        console.log("timeConsumingWork notify --");
        console.log("result:", r1);
    } catch (error) {
        console.log("timeConsumingWork notify --");
        console.log('result:', error)
    }
    
    // return "Done Sequence"
}
  
// promiseWrapper().then((r)=>console.log("Async :",r));
promiseWrapper();
console.log('programm end')
  
  
//   Output:
//   programm end
//   timeConsumingWork notify --
//   result: Execution time 1002 ms OK
//   result: Execution time 1202 ms Error
//   Async : Done Sequence
  
  