function find_missing_number(intArr1, intArr2) {
  const set = new Set(intArr2);
  for (let i = 0; i < intArr1.length; i++) {
    if (!set.has(intArr1[i])) {
      return intArr1[i]
    }
  }
  return false;
}

function is_shuffled(str1, str2, str3) {
  if (str1.length + str2.length !== str3.length) return false;
  let str1Idx = 0;
  let str2Idx = 0;
  let str3Idx = 0;

  while (str3Idx < str3.length) {
    if (str3[str3Idx] === str1[str1Idx]) {
      str1Idx+=1;
      str3Idx+=1;
    } else if (str3[str3Idx] === str2[str2Idx]) {
      str2Idx+=1;
      str3Idx+=1;
    } else {
      return false;
    }
  }
  return true;
}

let str1 = "abc"
let str2 = "def"
let str3 = "abdecf"
let res = is_shuffled(str1,str2,str3);
console.log(res);