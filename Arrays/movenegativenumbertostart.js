let arr = [1, 7, -8, 9, 3, -1, -2, 4, -5];
var movenegativenumbertostart = (arr) => {
    let left = 0;
    let right = arr.length - 1;
while(left <= right){
    if(arr[left] < 0){
        left++;
    }else if(arr[right] >= 0){
        right--;
    }else{
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
console.log(arr);
}

movenegativenumbertostart(arr);