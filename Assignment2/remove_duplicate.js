var nums= [1,2,2,2,3,3,4,4,4,5,6];

 var removeDuplicates = function(nums){

let k=1;

    for(i=0;i<nums.length-1;i++){
        if(nums[i]!== nums[i+1]){
            nums[k] = nums[i+1];
            k++;
        }
    }
    return k;
};
console.log(removeDuplicates(nums));