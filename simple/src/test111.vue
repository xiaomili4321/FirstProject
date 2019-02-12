<template></template>
<script>
export default {
  name: "test",
  methods: {
      test = () => {
// console.log('1'); // 宏任务 输出1

 
// setTimeout(function() { // setTimeOut1 ： 宏任务

// console.log('2');

// process.nextTick(function() { // process2

// console.log('3');

// })

// new Promise(function(resolve) {

// console.log('4');

// resolve();

// }).then(function() { //  then2

// console.log('5')

// })

// })

// process.nextTick(function() { // 微任务： process1

// console.log('6');

// })

// new Promise(function(resolve) { // promise 直接执行

// console.log('7');

// resolve();

// }).then(function() { // then1

// console.log('8')

// })

 
// setTimeout(function() { // setTimeout2 : 宏任务

// console.log('9');

// process.nextTick(function() { // process3

// console.log('10');

// })

// new Promise(function(resolve) {

// console.log('11');

// resolve();

// }).then(function() {  // then3

// console.log('12')

// })

// })

console.log('1主线程');					//整体script作为第一个宏任务进入主线程

setTimeout(function() {				//setTimeout，其回调函数被分发到宏任务Event Queue（执行规则：从上到下排序，先进先执行）中
    console.log('2宏任务');
    process.nextTick(function() {
        console.log('3宏任务里面的微任务');
    })
    new Promise(function(resolve) {
        console.log('4微任务');
        resolve();
    }).then(function() {
        console.log('5微任务')
    })
})

process.nextTick(function() {	//process.nextTick()其回调函数被分发到微任务Event Queue中
    console.log('6微任务');
})

new Promise(function(resolve) {		//Promise，new Promise直接执行，输出7
    console.log('7微任务');
    resolve();
}).then(function() {
    console.log('8微任务')			//then被分发到微任务Event Queue中,排在process.nextTick微任务后面。
})

setTimeout(function() {			//setTimeout，其回调函数被分发到宏任务Event Queue中,排在前面的setTimeout后面
    console.log('9宏任务');
    process.nextTick(function() {
        console.log('10宏任务里面的微任务');
    })
    new Promise(function(resolve) {
        console.log('11微任务');
        resolve();
    }).then(function() {
        console.log('12微任务')
    })
})
 
//执行结果： 1主线程、7微任务、6微任务、8微任务、2宏任务、4微任务、3宏任务里面的微任务、5微任务、
//          9宏任务、11微任务、10宏任务里面的微任务、12微任务

      }
  }
};
</script>

