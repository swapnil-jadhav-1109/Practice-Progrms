// Write a javascript program to check whether string is palindrome or not

// using for loop 

// function palindrome(str){
//   let reverse = "";
//   console.log(str);
//   for(i=0;i<str.length-1;i++){
//     let char = str[i];
//     reverse += char;
//   }
//   console.log(reverse);
//   if(str === reverse){
//     return true;
// }
// else{
//     return false;
// }
// }

// console.log(palindrome("madam"));



// using reverse for loop
const isPalindrome = (str)=>{
    let reversestr = "";
    for(i=str.length-1;i>=0;i--){
        let char = str[i];
        reversestr += char;
    }
    if(str === reversestr){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindrome("madam"));


