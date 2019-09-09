// [1,2,3]
// return result arr -> 
// [1,2,3], [2,1,3], [2,3,1], [1,3,2], [3,1,2], [3,2,1]
// include all n elements
// 
function permutations(array){  //[1,2,3]      2,3      3
  if (array.length === 0) return [];

  // return result.unshift(el);   // stack frame 3 returns -> [3]          stack frame 2 returns [2,3]    stack frame 1 returns [1,2,3]
  // remove el @ i from array, recursive call with remainder of array, tack el onto front of result 
  let retArr = []
  for (let i = 0; i < array.length; i++) {
    let el = array.shift();  /// el = 1           el = 2         el  = 3

    let result = permutations(array);  // perm([2,3])      perm[3]                perm[]
    result.map((el) => {

    })
  }
}



//50 trucks - full fuel tank
//fuel tank of 100 miles range
//payload 1 truck
//assume transfer doesnt take fuel
//assume can't simply chain together/same starting location
//caravan
//all trucks move together

//2 miles ->  50 * 2 fuel -> 1 fuel tank burned

// 49 trucks max fuel
// 2 miles -> 49 * 2 fuel = 98 units of fuel     49 / 2
// 100 / 49 = 2.04 
// 49 times we can decrement by 2 units of fuel to have all trucks fully fueled
// full tank of fuel / n trucks

// (100 / 50) + (100 / 49) + (100 / 48) + (100 / 47) + (100 / 46)

// function truckin(numTrucks, range) {
//   let total = 0;
//   while (numTrucks > 0) {
//     total += range / numTrucks;
//   }
//   return total;
// } 