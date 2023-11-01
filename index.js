
// Promise
function sum_async(n1, n2) {
	let p = new Promise( function (resolve, reject) {
		if (n1 >= 0 && n2 >= 0) {
			// do some complex time consuming work
			resolve(n1 + n2)
		}
		else
			reject('NOT_Postive_Number_Passed')
	} )
    
	return p;
}

// call and get result from promise

// ---Promises Chaining---

sum_async(10,20).then( function(result){
	console.log("1.result",result)
	return sum_async(result,result)
} ).then( function(result){
	console.log("2.result",result)
	return sum_async(result,result)
} ).then( function(result){
	console.log("3.result",result)
} )

console.log('end')


//--- Promises chaining with Async/await ---

async function sumInSequence() {
  let r1 = await sum_async(10, 20)
  console.log("1.result", r1);
  
  let r2 = await sum_async(r1, r1);
  console.log("2.result", r2)
  
  let r3 = await sum_async(r2, r2);
  console.log("3.result", r3)
  
  // return "Sequence done"
}

sumInSequence();
// sumInSequence().then((r)=>console.log("Async :",r));
console.log('end')
