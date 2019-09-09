// function move_zeros(array){
//   let currIdx = 0;
//   let zeroes = 0;
//   while (currIdx < array.length) {
//     let el = array.pop();
//     if (el === 0) {
//       array.push(el);
//     } 
//   }
//   return array;
// }

function move_zeros(array){
  let num_zeroes = 0;
  for (let i = 0; i< array.length - num_zeroes; i++) {
    if (array[i] === 0) {
      array.splice(i, 1);
      array.push(0);
      num_zeroes += 1;
    } 
  }
  return array;
}

let res = move_zeros([1,5,0,2,0,4,0,7]);
console.log(res);


function look_and_say(arr){
  let retArr = [];
  let count = 0;
  let currNum;
  for (let i=0; i < arr.length; i++) {
    if (currNum === arr[i]) {
      count += 1
    } else {
      if (currNum)
    }
  }

  return retArr;
}