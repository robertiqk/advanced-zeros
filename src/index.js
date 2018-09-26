module.exports = function getZerosCount(number, base) {
  // your implementation
  let arrDuple = [];

  function lowNumber(x) {
    let j = 0;
    let i = 2;
    let arr = [];
    do {
      if (x % i == 0) {
          arr[j] = i;
          j++;
          x /= i;
       } else {
            i++;
         }
    } while (i <= x);
    arrDuple = arr.filter(function(item){
      if (item == arr[arr.length - 1]) return true;
        else return false;
    });
    return arr[arr.length - 1]; 
  }

  let count = 0;
  let k = lowNumber(base);
  while (number > 0) {
    number = number / k;
    count += Math.floor(number);
  }
  count = Math.floor(count / arrDuple.length);
  return count;
}