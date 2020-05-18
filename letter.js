var matches;
var acc_vowels = 0;
var acc_consonant = 0;

const vowels = ["A", "E", "I", "O", "U"];
const consonant = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

const regexp = /^(?:[A-Za-z]|[.,!?:;...]|[ \f\n\r\t\v])+$/;

while (true) {
    input_text = prompt("Введите текст (латинские буквы)");
    matches = input_text.match(regexp);

    if (matches){
        matches = matches[0].toUpperCase();
        break;   
    } 
}

for(let i = 0; i < matches.length; i++){
    if (vowels.includes(matches[i])){
        acc_vowels = acc_vowels + 1;
    }

    if (consonant.includes(matches[i])){
        acc_consonant = acc_consonant + 1;
    }    
}

alert(`Гласных всего: ${acc_vowels}. Согласных всего: ${acc_consonant}. `);