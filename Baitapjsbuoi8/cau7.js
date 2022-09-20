// 7. Tính tổng các số lẻ trong khoảng 1 đến n?
// VD: n = 5, output: 9

let n=5;
let sum =0 ;
for (let index = 1; index <= n; index+=2) {
    sum+=index;
}
console.log(sum);
    