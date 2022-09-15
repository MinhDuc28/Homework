// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// VD: “ Hello  world”, output: 3

const Demkhoangtrang = (params)=>{
let dem = 0 ; 
for (let i = 0; i < params.length; i++) {
        if(params.charAt(i) === ' '){ dem++; }
    }
    return dem;
}
console.log(Demkhoangtrang(' Hello  world'))