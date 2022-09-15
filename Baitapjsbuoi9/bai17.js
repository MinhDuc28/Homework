// 17.  Viết hàm số tính min, max của 3 số?
// VD: min(2,4,7) => output: 7

const Minso = (a,b,c)=>{
    let min = a;
    if(a > b){
        min = b;
    }else if(a > c){
        min = c;
    }
    return min;
}
const Maxso = (a,b,c)=>{
    let max = a;
    if(max < b){
        max = b;
    }
     if(max < c){
        max = c;
    }
    return max;
}
console.log('Min :',Minso(2,4,7));
console.log('Max :',Maxso(2,4,7));