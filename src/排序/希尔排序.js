/*
    插入排序问题： 当最小元素在后面时，后移的次数明显增多，对效率有影响

    希尔排序是希尔（Donald Shell） 于 1959 年提出的一种排序算法。 希尔排序也是一种插入排序， 
它是简单插入排序经过改进之后的一个更高效的版本， 也称为缩小增量排序。

    希尔排序按照增量将数组进行分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包
含的关键词越来越多，当增量减至 1 时，整个文件恰被分成一组，算法便终止。
*/

let arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];

// 交换法

// function shellSort(arr) {
//     for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap/2)) {
//         let temp = 0;
//         // 步长为2， 偶数为1组排序，奇数为2组排序，
//         for (let i = gap; i < arr.length; i++) {
//             //把每组进行排序，把最小的数冒泡到前面
//             for (let j = i - gap; j >= 0; j -= gap) {
//                 console.log(gap, i, j); 
//                 if (arr[j] > arr[j + gap]) {
//                     temp = arr[j];
//                     arr[j] = arr[j + gap];
//                     arr[j + gap] = temp
//                 }
//             }
//         }
//     }                                          

//     return arr
// }

// 移动法
// function shellSort(arr){
//     // 100/2 = 50,2   50/2 = 25,4
//     for(let gap = Math.floor(arr.length/2); gap > 0; gap = Math.floor(gap/2)){
//         for(let i = gap; i< arr.length; i++){
//             let insertVal = arr[i];
//             let insertIndex = i - gap
//             while(insertIndex >= 0 && insertVal < arr[insertIndex]){
//                 arr[insertIndex + gap] = arr[insertIndex]
//                 insertIndex -= gap
//             }
//             arr[insertIndex + gap] = insertVal  
//         }
//     }
//     return arr

// }



function shellSort(arr){
    //步长   分多少组
    for(let gap = Math.floor(arr.length/2); gap>0; gap = Math.floor(gap/2)){
        // 循环各组
        for(let i = 0; i< gap; i++){
            //给各组进行插入排序
            for(let j =gap + i; j< arr.length; j += gap){
                let insertVal = arr[j]
                let insertIndex = j - gap
                while(insertIndex >= 0 && insertVal < arr[insertIndex]){
                    arr[insertIndex + gap] = arr[insertIndex]
                    insertIndex = insertIndex- gap
                }
                arr[insertIndex+gap] = insertVal
            }

        }
        
    }
    return arr
}


console.log(arr);
let arrA = shellSort(arr)
console.log(arrA);
