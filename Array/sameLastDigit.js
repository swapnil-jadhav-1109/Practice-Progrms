 // Javascript program to check if the numbers Have same last digit

 let arr = [10,20,30,40,50];
 function digit(arr){
    let result;
    for(i=0;i<arr.length;i++){
         result= arr[i]%10;
    }
    if(result === 0){
     console.log("this array number is the last digit is same");
    }
    else{
        console.log("this array number is the last digit is not same");
    }
 }
 digit(arr);