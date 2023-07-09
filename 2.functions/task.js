  function getArrayParams (...arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let avg;
    for(let i = 0;i<arr.length;i++){
      sum += arr[i];
      if (arr[i]<min){
        min=arr[i];
      }else if (arr[i]>max){ 
        max = arr[i];}
    }
    avg = +(sum/arr.length).toFixed(2);
    return {min: min, max: max, avg: avg};
  }

function summElementsWorker(...arr) {
let sum = 0;
for(let i=0;i<arr.length;i++){
sum += arr[i];
}
return sum;
}

function differenceMaxMinWorker(...arr) {
if(arr.length == 0){
  return 0;
}
let maxArg = Math.max(...arr);
let minArg = Math.min(...arr);
let diffArg = maxArg - minArg;
return diffArg;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length ==0){
    return 0;
  }  
  let sumEvenElement = 0;
      let sumOddElement = 0;
    for(let i = 0; i<arr.length;i++){
      if (arr[i] % 2 == 0){
        sumEvenElement += arr[i];
      } else if (arr[i] % 2 !=0){
        sumOddElement += arr[i];
      }
    }
    let difEvenOdd = sumEvenElement - sumOddElement;
    return difEvenOdd;
    }


function averageEvenElementsWorker(...arr) {
if(arr.length ==0){
  return 0;
}
  let sumEvenElement = 0;
let countEvenElement = 0;
for(let i = 0;i<arr.length;i++){
  if(arr[i]%2 == 0){
    sumEvenElement += arr[i];
    countEvenElement += 1;
  }
}
let avg = sumEvenElement/countEvenElement;
return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result;
  let numbers;

  if(arrOfArr.length == 0){
    return 0;
  } 

  for(i = 0; i < arrOfArr.length; i++) {
    numbers = arrOfArr[i];
    result = func(...numbers);
    if(result > maxWorkerResult) maxWorkerResult = result;
  }

  return maxWorkerResult;
}
