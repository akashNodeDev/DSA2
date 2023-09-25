const num=10;

function getFibonacci(n) {
    let first = 0;
    let second =1;
    console.log(first);
    console.log(second);
    let sum = first+second;
    while(sum<=n) {
       console.log(sum);
        first = second;
        second = sum;
        sum = first+second;
    }
}

getFibonacci(num)