// write in js to count total number of denominations in a given amount.(no of notes and coins should be minimum).

function coins(amount){
    if(amount >= 500){
        let notes = Math.floor(amount/500);
        console.log("the 500 notes is:",notes);
        amount = amount - notes * 500; 
    }
    if(amount >= 200){
        let notes = Math.floor(amount/200);
        console.log("the 200 notes is:",notes);
        amount = amount - notes * 200; 
    }
    if(amount >= 100){
        let notes = Math.floor(amount/100);
        console.log("the 100 notes is:",notes);
        amount = amount - notes * 100; 
    }
    if(amount >= 500){
        let notes = Math.floor(amount/500);
        console.log("the 500 notes is:",notes);
        amount = amount - notes * 500; 
    }
    if(amount >= 50){
        let notes = Math.floor(amount/50);
        console.log("the 50 notes is:",notes);
        amount = amount - notes * 50; 
    }
    if(amount >=20){
        let notes = Math.floor(amount/20);
        console.log("the 20 notes is:",notes);
        amount = amount - notes * 20; 
    }
    if(amount >= 10){
        let notes = Math.floor(amount/10);
        console.log("the 10 notes is:",notes);
        amount = amount - notes * 10; 
    }
    if(amount >= 5){
        let notes = Math.floor(amount/5);
        console.log("the 5 notes is:",notes);
        amount = amount - notes * 5; 
    }
    if(amount >= 2){
        let notes = Math.floor(amount/2);
        console.log("the 2 coins is:",notes);
        amount = amount - notes * 2; 
    }
    if(amount >=1){
        let notes = Math.floor(amount/1);
        console.log("the 1 coins is:",notes);
        amount = amount - notes * 1; 
    }

}
coins(1001);