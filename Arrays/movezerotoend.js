let arr = [1, 0, 2, 0, 3, 0, 0, 4, 5];
var movezerotoend = (arr) => {
    let j = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    for (let i = j + 1; i < arr.length; i++) {
        if (arr[i] != 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
        }
    }

    console.log(arr);
}

movezerotoend(arr);