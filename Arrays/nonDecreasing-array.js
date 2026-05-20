let nums = [4,2,3];

var checkPossibility = function(nums) {
 let voilation = 0;
 for(let i =1; i < nums.length; i++){
    if(nums[i-1] > nums[i]){
        if(voilation == 1){
            return false;
        }

        if(nums[i<2] || nums[i<2] <= nums[i]){
            nums[i-1] = nums[i];
        }else{
            nums[i] = nums[i-1];
        }
    }
 }
 return true;
}

console.log(checkPossibility(nums));