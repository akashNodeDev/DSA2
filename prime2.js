
function checkPrime(n){

    if(n<2){
        return false;
    }

    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }

    return true;

}

console.log(checkPrime(2));
console.log(checkPrime(14));
console.log(checkPrime(12));

// Big-O = O(n) Linear time complexity
