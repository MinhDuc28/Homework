// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// VD: s1: “This is a beautiful day”, s2: “is” => output: 2

const indexOfString = (s1,s2) => {
    return s1.indexOf(s2);
}

console.log(indexOfString("This is a beautiful day","is"));