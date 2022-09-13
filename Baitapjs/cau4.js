// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// VD: n = 10, output: 2 3 5 7

let n = 30;
for (let index = 2; index <= n ; index++) {
    let flag = true;
    for (let n = 2; n <= Math.sqrt(index); n++) {
        if (index % n ===0){
            flag = false;
            break;
        }
    }
    if(flag == true){
        console.log(index);
    }
}