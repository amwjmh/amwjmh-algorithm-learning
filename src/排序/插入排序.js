
let arr = [24, 4, 4, 11, 8, 42, 15, 17, 10, 37]

console.log(arr);

console.time("蚝时");
let result = insertSort(arr)
console.timeEnd("蚝时")

console.log(result);
function insertSort(arr) {
        for (let i = 1; i < arr.length; i++) {
                //把要比较的元素存下
                let insertVal = arr[i]
                // 和它后面的元素索引
                let insertIndex = i - 1; 
                // 与后面的有序数组 ，找到当前元素在有序数组的位置
                while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
                        // 当前元素小于后面的元素，把大于该元素的有序数组元素后移
                        arr[insertIndex + 1] = arr[insertIndex]
                        // 继续与后面的数据比较
                        insertIndex--
                }

                // 退出while循环时，找到位置后，插入到有序数组中
                arr[insertIndex + 1] = insertVal
                console.log(`第${i}轮：%c${arr}`, "font-size: 18px;color: #444; border-radius: 5px; padding: 10px 25px;background: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)");

        }

        return arr
}



