const arr = [44,-12,14,70,66,5];
class Solution{
    secondLargest(arr)
    {
        let largest = 0;
        let seclargest = -1;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > largest){
                seclargest = largest;
                largest = arr[i];
            }else if(arr[i] < largest && arr[i] > seclargest){
                seclargest = arr[i];
            }
        }

        console.log(seclargest);
    }
}

const obj = new Solution();
obj.secondLargest(arr);