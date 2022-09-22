
var readlineSync = require('readline-sync');
var fs = require('fs');

var showMenu = function () {
    console.log('   Quản lý sinh viên   ');
    console.log('===============================');
    console.log(' 1.Hiển thị tất cả học sinh');
    console.log(' 2.Thêm mới học sinh');
    console.log(' 3.Xoá 1 học sinh theo id');
    console.log(' 4.Xoá nhiều học sinh theo id');
    console.log(' 5.Edit thông tin học sinh ');
    console.log(' 6.Tìm kiếm học sinh theo tên ');
    console.log(' 7.Tìm kiếm học sinh thủ khoa vào trường ');
    console.log(' 8.Hiển thị danh sách học sinh bị cảnh cáo ');
    console.log(' 9.Sắp xếp học sinh theo bảng chữ cái ');
    console.log(' 10.Sắp xếp học sinh theo điểm trung bình tăng dần ');
    console.log(' 11.Sắp xếp học sinh theo tuổi tăng dần  ');
    console.log(' 12.Exit');
}

showMenu();
var studentStr = '';
var chose = readlineSync.question('Your choice ? ');
let studenJSON = fs.readFileSync('./dataJson.txt');
let student = JSON.parse(studenJSON);
let indexSex = ['male', 'female']
function saveFile(student) {
    studentStr = JSON.stringify(student);
    fs.writeFileSync('./dataJson.txt', studentStr);
}
function createstd() {
    const id = Math.random();
    let name = readlineSync.question('Name? ');
    let age = parseInt(readlineSync.question('Age? '));
    let sex = readlineSync.keyInSelect(isex,'Sex? Male/Female: 0/1'); 
    let scorein = parseFloat(readlineSync.question('Score input ? '));
    let scoreavg = parseFloat(readlineSync.question('Score average? '));
    student.push ({
        id : [id] ,
        name : name,
        age : age ,
        sex : isex[sex], 
        scorein : scorein,
        scoreavg : scoreavg

    })
    saveFile();
    chose = 0;
}
function delStudent() {
    let iddel = readlineSync.question('What id do you want delete? ');
     for (var i = 0; i < students.length; i++){
        if (students[i].id === studentId){
            students.splice(i, 1);
        }
    }
}
function editStudent() {
    let Edit = readlineSync.question('What name do you want to edit? ');
    let indexEdit = student.findIndex(item => item.name === Edit);
    let newname = readlineSync.question('name? ');
    let newage = parseInt(readlineSync.question('age? '));
    let newsex = readlineSync.keyInSelect(indexSex, 'sex? male/female: 0/1');
    let newscorein = parseInt(readlineSync.question('score input? '));
    let newscoreavg = parseInt(readlineSync.question('score average? '));
    let newitemStudent = {
        name: newname,
        age: newage,
        sex: indexSex[newsex],
        scorein: newscorein,
        scoreavg : newscoreavg
    };
    student.splice(indexEdit, 1, newitemStudent);
    saveFile();
    chose = 0;
}
let findStudent=function(name){
    let namefind = readlineSync.question('What name do you want find? ');
    let indexFind = student.findIndex(item => item.name === namefind);
    console.log(student[indexFind]);
    chose=0;
}
function alertStudent() {
    let name = readlineSync.question('Name? ');
    let scoreavg = parseFloat(readlineSync.question('Score average? '));
    document.writeln(`Họ và tên của học sinh : ${name}` );
    document.writeln(`Điểm trung bình của học sinh : ${scoreavg}` );
    document.writeln(`Xếp loại học lực :` );
    if (scoreavg<4) {
        document.writeln('Học lực kém');
        
    } else {
        document.writeln('Học lực giỏi');
    }
    
}

while (true) {
    switch (parseInt(chose)) {
        case 0:
            showMenu();
            chose = readlineSync.question('Your choice? ');
            break;
        case 1:
            console.log(student);
            chose = 0;
            break;
        case 2:
            createstd();
            break;
        case 3:
            delStudent();
            break;
        case 4:
            editStudent()
            break;
        case 5:
            findStudent();
            break;
        case 6:
            alertStudent();
            break;
        case 7:
            process.exit();
            break;
        default:
            console.log('Bạn phải chọn 1 trong các số menu');
            chose = 0;
    }
}