const arr= [12,15,16,20,40,2];
largestelement = arr[0];
for(let i =0; i < arr.length;i++){
    if(arr[i] > largestelement){
        largestelement = arr[i];
    }
}
console.log("The largest element is: ",largestelement);