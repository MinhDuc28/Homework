// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”

const reverseString = (input) => {
    let newstring = input.split('').reverse().join('');
    return newstring;
}

console.log(reverseString('This is a beautiful day'));
