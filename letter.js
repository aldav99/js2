var input_text;
var acc_vowels = 0;
var acc_consonant = 0;

const vowels = ["A", "E", "I", "O", "U"];
const consonant = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];


input_text = prompt("Введите текст (латинские буквы)");

input_text = input_text.toUpperCase();


for (let i = 0; i < input_text.length; i++) {
    if (vowels.includes(input_text[i])) {
        acc_vowels = acc_vowels + 1;
    }

    if (consonant.includes(input_text[i])) {
        acc_consonant = acc_consonant + 1;
    }
}

alert(`Гласных всего: ${acc_vowels}. Согласных всего: ${acc_consonant}. `);