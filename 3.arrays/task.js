function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]); 
}

function getUsersNamesInAgeRange(users, gender) {
    let mas = users.filter(item => item.gender === gender).map(item => item.age);
  let res = mas.reduce((sum, age) => sum + age, 0);
  
  return (mas.length > 0) ? res / mas.length : 0;
}