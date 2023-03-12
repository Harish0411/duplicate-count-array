let arr = [6,5,12,8,8,12,6,'10','10',-9,-9];
  function duplicateCount(a){
    let count=0;
    for(i=0; i<a.length-1; i++){
       for(j=i+1; j<a.length;j++){
        if(a[i] == a[j]){
          count++;
           }
        }
       }
       return count;
    }
  console.log(duplicateCount(arr));

