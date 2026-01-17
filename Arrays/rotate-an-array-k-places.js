const arr = [11,12,13,14,15,16];
let k = 2;
class Solution{
    reverse(arr,start,end){
        while(start < end){
            [arr[start],arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
    }
    rotateanarrayaccordingtok(k,arr){
        const n = arr.length;
        k = k %n;
        this.reverse(arr,0,n-1);
        this.reverse(arr,0,k-1);
        this.reverse(arr,k,n-1);
        console.log(arr);
    }
}

const obj = new Solution();
obj.rotateanarrayaccordingtok(k,arr);