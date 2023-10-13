
function search(arr,target) {
    let arrLength = arr.length;
    for(let i=0;i<arrLength;i++) {
        if(arr[i]===target) {
            return i;
        } 
    }
    return -1;
}

console.log(search([12,15,18,20,19],15));

//Big-O = O(n) Linear time complexity