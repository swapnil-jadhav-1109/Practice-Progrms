let arr = ["Mango", "Apple", "Pineapple", "Mango", "Grapes","Watermelon","Grapes", "Cherry"];

function clone(arr){
  let uniqFruits = [];
  for(i=0;i<arr.length;i++){
    let uniq = true;
    for(j=0;j<uniqFruits.length;j++){
        if(arr[i]===uniqFruits[j]){
            uniq= false;
            break;
        }
    }
    if(uniq){
        uniqFruits.push(arr[i]);
    }
  }
  return uniqFruits;
}
console.log(clone(arr));

