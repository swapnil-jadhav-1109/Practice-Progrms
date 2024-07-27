// write program in js to print all the prime numbers between 1 to 100.

function prime(num){
    let isprime = true;
if(num <= 1){
   return false;
}
for(i=2;i<num;i++){
    if(num%i === 0){
      isprime = false
      return false;
    }
}
if(isprime){
    return true
}
}
console.log(prime(4));