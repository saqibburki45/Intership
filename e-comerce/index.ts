let arr = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let sortedArr = new Array(arr.length);

sortedArr = arr.sort();
let target = 1;
function Search(first: number, last: number, target: number) {
  let mid = Math.floor(first + last / 2);
//   for(let val = 4;mid<sortedArr.length-1;val++){
//     console.log(val)
//   }
  if (target === mid) return mid;
  if (target > mid) {
    console.log("searching in greater values...");
    for(let i = mid; i <= sortedArr.length - 1; i++) {
      // console.log(i)
      if (sortedArr[i] == target) {
        return target;
      }
    }
  }
  if (mid > target) {
    for(let j = mid; j >= 0; j--) {
      console.log("Searching in lower values...");
      if (sortedArr[j] == target) {
        return sortedArr[j];
      }
    }
  }
}
let val = Search(sortedArr[0], sortedArr.length-1, target);
console.log("Your value is:",val)
