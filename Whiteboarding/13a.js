function rand5(){
  let rand = Math.random(); /// between 0 and 1
  return Math.floor(rand * 6);
}

// create array of first 7 numbers 
function rand7(){
  let mod = -1;
  while (mod < 0 || mod > 7) {
    let num = rand5(); // 1 - 5
    res = ((num * 5) + rand5())
    if (res < 21) {
      return res % 7;
    }    
  }
  return mod;
  // 3 * Math.random() - > floored..  + num 
  // return num + Math.floor(3 * Math.random()); // 1-7
}

//num multiple of 7
// use number 5 and invoked rand5

console.log(rand7());