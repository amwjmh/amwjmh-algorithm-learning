
        /* 第一层 for 循环控制走多少趟：for (int i = 0; i < arr.length - 1; i++) {
        从数组第一个元素开始，因为每次都是拿当前元素 arr[j] 和其后一个元素 arr[j+1] 进行比较
        到数组倒数第二个元素结束，将 arr[arr.length - 2] 与 arr[arr.length - 1] 进行比较后，数组就已经是有序数组
        如果数组大小为 n ，那么执行完第 n - 1 趟时，数组就已经是有序数组
        第二层 for 循环控制从第几个元素开始执行选择排序：for (int j = i + 1; j < arr.length; j++)
        每次进入第二层 for 循环时，先假设当前元素 arr[i] 是最小的元素：min = arr[i]; ，并记录最小元素的下标：index = i;
        然后依次和其后面的元素 arr[j] 比较，如果找到比 arr[i] 小的元素，则更新最小值和最小值的索引：min = arr[j]; index = j ;*/
        
        let arrA = [5, 32, 38, 22, 18, 36, 40, 28, 38, 22, 11, 28, 43, 14];
        function noRepeat(arr){
          return  arr.filter( (item, index, arr) => arr.indexOf(item) == index)
        }
        let arr = noRepeat(arrA);
        for(let i = 0; i< arr.length; i++){
            let minIndex = i;
            let minValue = arr[i];
            for(let j = i+1; j < arr.length; j++){
                if(arr[j] > minValue){
                    minIndex = j
                    minValue = arr[j]
                }
            }
            arr[minIndex] =  arr[i]
            arr[i] = minValue
        }
        console.log(arr);

        // let arr = new Array(1000);
        // for(let i = 0; i< arr.length; i++){
        //         arr[i] = Math.floor(Math.random() * 1000)
        // }

        // document.write('<h3>排序前' + arr + '</h3>');
        // console.time('运行时间')
        // for (let i = 0; i < arr.length; i++) {
        //     let minIndex = i; //最小值索引
        //     let min = arr[minIndex];//最小值
        //     for (let j = i + 1; j < arr.length; j++) {
        //         if (min > arr[j]) {
        //             min = arr[j];
        //             minIndex = j;
        //         }
        //     }
        //     //把最小值交换到前面
        //     arr[minIndex] = arr[i];
        //     arr[i] = min
        //     document.write('<h3>第' + i + '次&nbsp&nbsp&nbsp' + arr + '</h3>');
        // }
        // console.timeEnd('运行时间')
        // document.write('<h3>排序后' + arr + '</h3>');

    
