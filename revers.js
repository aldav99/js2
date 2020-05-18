var input_text;

while (true) {
    input_text = prompt("Введите слово для реверсии. Для выхода нажмите ВВОД.");

    if (input_text.length == 0 ){
        break;   
    } 

    input_text = input_text.split("").reverse().join("");

    alert(`Реверсия: ${input_text}`);

}

alert(`---------------СПАСИБО-------------------- `);