  // write a javascript program to remove the duplicate value in this arry.
let arr = [1,2,3,4,2,3,6,7];
function Unique(arr){
 let uniqArry = [];
 for(i=0;i<arr.length;i++){
    let uniq = true;
  for(j=0;j<uniqArry.length;j++){
    if(arr[i] === uniqArry[j]){
        uniq = false;
        break;
    }
  }
  if(uniq){
    uniqArry.push(arr[i]);
  }
}
    return uniqArry;
}
console.log(Unique(arr));