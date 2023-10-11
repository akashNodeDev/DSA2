function checkPrime(n) {
    let counter=0;
    for(let i=1;i<=n;i++){
        if(n%i==0)
        counter+=1
    }
    if(counter>2){
        return false
    }else{
        return true;
    }
}

console.log(checkPrime(5))