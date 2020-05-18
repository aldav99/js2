var input_text;

while (true) {
    input_text = prompt("Введите текст с лишними пробелами. Для выхода нажмите ВВОД.");

    if (input_text.length == 0 ){
        break;   
    } 

    input_text = input_text.trim();
    input_text = input_text.replace(/\s+/gm, ' ');

    alert(`Текст без повторных пробелов: ${input_text}`);

}

alert(`---------------СПАСИБО-------------------- `);