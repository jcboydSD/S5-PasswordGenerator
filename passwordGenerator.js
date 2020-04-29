let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specChar = ['!', '@', '#', '$', '-'];
let password = '';
let charType;

for (let i = 0; i < 12; i++) {
    charType = Math.round(Math.random() * 3);
    switch (charType) {
        case 0:         //add upperCase
            password += upperCase[Math.round(Math.random() * 25)];
            break;
        case 1:         //add lowerCase
            password += lowerCase[Math.round(Math.random() * 25)];
            break;
        case 2:         //add numbers
            password += numbers[Math.round(Math.random() * 9)];
            break;
        case 3:         //add specChar
            password += specChar[Math.round(Math.random() * 4)];
            break;
    }
}
console.log(`New password = ${password}`);
