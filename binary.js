function binarySearch(arr,target){
    let leftIndex=0;
    let rightIndex= arr.length;

    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);
        if(target === arr[middleIndex]) {
            return middleIndex;
        }

        if(arr[middleIndex]<target){
            rightIndex = middleIndex-1;
        } else{
            leftIndex = middleIndex+1;
        }
    }
    return -1;
}

console.log(binarySearch([-5,2,4,6,10],2));

// Big- O = O(logn);