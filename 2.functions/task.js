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

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
