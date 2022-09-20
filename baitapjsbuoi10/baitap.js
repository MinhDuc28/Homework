// 24. Cho một mảng là một tập các số nguyên dương, 
// lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
function CheckSNT(n) {
    let flag = true;

    if (n < 2) {
        flag = false;
    }
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            flag = false;
            break;
        }
        else flag = true;
    }
    if (flag == false) {
        return -1;
    } else return 1;
}
const filter = (arr) => {
    let Newarr = [];
    for (let index = 0; index < arr.length; index++) {
        if ( CheckSNT(arr[index]) == 1 ) {
            Newarr.push(arr[index]);
        }
    }
    console.log(NewArr);
}
filter([1, 2, 4, 5, 6, 7, 8, 23, 55])

// 25. Cho một mảng là một tập các số nguyên dương, 
// hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
const Binhphuong = (arr) =>{
    let Array = [];
    for (let index = 0; index < arr.length; index++) {
        Array.push(arr[index]*arr[index]);
    }
    console.log(Array);
}
BinhPhuong([1,2,3,4,5,6,7,8,9])

// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị,
//  và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất.
//   Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
const minus = (a,b) =>{
    return Math.abs(a-b);
}
const minRange = (arr,k) =>{
    let resultArray = [];
    let minmin = Math.abs(k - arr[0]);
    for (let index = 1; index < arr.length; index++) {
        if (minus(k,arr[index]) < minmin){
            minmin = minus(k,arr[index]);
        }
    }
    if (arr.indexOf(k-minmin) !== -1){
        resultArray.push(arr[arr.indexOf(k-minmin)])
    }
    if (arr.indexOf(k+minmin) !== -1){
        resultArray.push(arr[arr.indexOf(k+minmin)])
    }
    console.log(resultArray);
}
minRange([1,2,3,4,6,7],8)

// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.


let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
const normalizeName = (name) => {
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++) {
      if (i === 0 || name.charAt(i - 1) === ' ') {
        name =
          name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
      }
    }
    return name;
  };
const Searching = (arr) =>{
    for (let index = 0; index < arr.length; index++) {
        arr[index].firstName = normalizeName(arr[index].firstName);
        arr[index].lastName = normalizeName(arr[index].lastName);
        if (arr[index].firstName.length >=3 && arr[index].firstName.indexOf('a') !== -1){
            console.log(arr[index]);
        }
    }
}
Searching(students);

// 28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.

const lastNameSearching = (arr) =>{

    for (let index = 0; index < arr.length; index++) {
        arr[index].firstName = normalizeName(arr[index].firstName);
        arr[index].lastName = normalizeName(arr[index].lastName);
        if (arr[index].lastName.slice(0,2) == "Do" ){
            console.log(arr[index]);
        }
    }
}
lastNameSearching(students)

// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName. Hãy sắp xếp danh sách học viên theo tên (firstName).

const firstNameSort = (arr) =>{
    arr.sort((a, b) => {
        let left = a.firstName;
        let right = b.firstName;
        return left === right ? 0 : left > right ? 1 : -1;
      });
    console.log(arr);
}
firstNameSort(students)