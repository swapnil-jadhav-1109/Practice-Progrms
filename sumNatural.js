function Sum(n1,n2){
    let add  = 0;
    for(i=n1;i<=n2;i++){
        add += i;
    }
    return add;
}
console.log(Sum(1,100));