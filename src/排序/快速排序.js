let arr = [24, 18, 11, 46, 4, 36, 6, 42, 15, 12, 34, 25]

function quickSort(arr, left, right) {
    let l = left
    let r = right
    let pivot =  arr[Math.floor((left + right) /2)]
    while(l <  r){
        // 找出前段大于pivot元素索引
        while(arr[l] < pivot){
            l++
        }
        // 找出后段小于pivot元素索引
        while(arr[r] > pivot ){
            r--
        }
        if(l >= r){
            break
        }
        // 找出后， 进行交换
        let con = arr[l]
        arr[l] = arr[r]
        arr[r] = con
    }
    // 如果l == r ,必须l++, r--, 否则栈溢出
    if(l == r){
        l ++
        r --
    }
    // 递归  左数
    if(left < r){
        quickSort(arr, left, r)
    }
    // // 递归 右数
    if(right > l){
        quickSort(arr, l, right)
    }
}
console.log(arr);

quickSort(arr, 0, arr.length-1)

console.log(arr);
