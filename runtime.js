const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let results1Append = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let results1Insert = perf.stop();

console.log('Results for the tinyArray');
console.log("insert", results1Insert.preciseWords);
console.log("append", results1Append.preciseWords);


perf.start();                     // Starts timer
doublerAppend(smallArray);
let results2Append = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerAppend(smallArray);
let results2Insert = perf.stop();

console.log('Results for the smallArray');
console.log("insert", results2Insert.preciseWords);
console.log("append", results2Append.preciseWords);


perf.start();                     // Starts timer
doublerAppend(mediumArray);
let results3Append = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(mediumArray);
let results3Insert = perf.stop();

console.log('Results for the mediumArray');
console.log("insert", results3Insert.preciseWords);
console.log("append", results3Append.preciseWords);


perf.start();                     // Starts timer
doublerAppend(largeArray);
let results4Append = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(largeArray);
let results4Insert = perf.stop();

console.log('Results for the largeArray');
console.log("insert", results4Insert.preciseWords);
console.log("append", results4Append.preciseWords);


perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let results5Append = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let results5Insert = perf.stop();

console.log('Results for the extraLargeArray');
console.log("insert", results5Insert.preciseWords);
console.log("append", results5Append.preciseWords);