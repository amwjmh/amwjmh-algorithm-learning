
        let arr = [3, 20, -1, 10, 9];
        // let arr = new Array(1000);
        // for(let i = 0; i< arr.length; i++){
        //         arr[i] = Math.floor(Math.random() * 1000)
        // }
        let l = 0;
        let flog = false;
        document.write('<h3>排序前'+ arr +'</h3>');
        console.time('运行时间')
        
        for (let j = 0; j < arr.length - 1; j++) {
            for (let i = 0; i < arr.length - 1 - j; i++) {
                if (arr[i] > arr[i + 1]) {
                    flog = true;
                    l = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = l;
                }
            }
            document.write('<h3>第'+ j +'次' + arr + '</h3>');
            if(!flog){
                // 没有交换就退出
                break;
            }else{
                flog = false
            }
        }
        console.timeEnd('运行时间')
        document.write('<h3>排序后'+ arr +'</h3>');