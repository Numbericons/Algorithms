// iterate through array

 

// subsets(array) {
  // let ret_arr = [[]];
  // array.forEach((el,i) => {
    //   // ret_arr.push([el]);
    //   array.forEach((in_el, j) => {
      //     let subArr = [];
      //     if (i !== j) {
        //       subArr.push(array[j]);
        
        //     }
        
        //   })
        // })
        
        // return ret_arr;
// }
        

// [1,2,3]  => [], [1], [2], [3], [1,2], [1,3], [2,3]
function subsets(array){
  let ret_arr = [[]];
  for (let i = 0; i < array.length; i++) { // i = 0
    let subArr = [];
    subArr.push(array[i]);   //subArr = [1]
    for (let j = i+1; j < array.length; j++) {   //j = 1  
      subArr.push()
    }
    ret_arr.concat(subArr);
  }

  return ret_arr;
}

function subsets(array) {   // [1,2]
  if (array.length === 0) {
    return [[]];
  }

  let el = array[0];  /// el = 1
  let remArr = array.slice(1);
  return [[el]].concat(subsets(remArr)).concat(array)  /// [1] concat [2]
}