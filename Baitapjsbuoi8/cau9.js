// 9. Kiểm tra n có phải là số đối xứng?
// VD1: n=1242343, output: ‘NO’
// VD2: n = 123676321, output: ‘YES’

let n = 123454321;
let N = n;
let x = 0;
while ( N > 0) {
    x = x * 10 + N % 10;
    N = Math.floor( N / 10);
}
if(x == n){
    console.log("YES");
}else{
    console.log("NO");
}