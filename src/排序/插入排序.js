
        let arr = [30, 20, -1, 10, 9];
        console.log(arr);
        let insertVal = arr[1];
        let insertIndex = 1;
        while(insertIndex >= 0 && insertVal<arr[insertIndex-1]){
              arr[insertIndex] = arr[insertIndex - 1];
                insertIndex -- 
        }
        arr[insertIndex] = insertVal

        console.log(arr);
        
        


        

