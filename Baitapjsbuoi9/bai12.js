// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”

const RemoveSpace = (param1)=>{
       for (let i = 0; i < param1.length; i++) {
        let param2 = param1.charAt(i);
        if(param2.charAt(i) ===' '){
            param1 = param1.replaceAll(param2,'');
        }
       }
       return param1;
}
console.log("output:",RemoveSpace(' Hello World '));