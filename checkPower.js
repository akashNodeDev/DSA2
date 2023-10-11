function checkPower(n){
    if(n<1){
        return false;
    }

    while(n>1){
        if(n % 2 !== 0){
            return false;
        }
        n=n/2;
    }
    return true;

}

console.log(checkPower(8)); // 2^3
console.log(checkPower(1)); // 2^0
console.log(checkPower(7)); // false