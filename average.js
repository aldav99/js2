var sum = 0;
var acc = 0;
var average = 0;

while (true) {
    num = prompt("Введите число для подсчета среднего (Для выхода нажмите ввод)");

    num = parseFloat(num);

    if (Number.isNaN(num)){
        break;   
    } 

    sum = sum + num;
    acc = acc + 1;
    average = sum/acc;

    console.log (`sum = ${sum}, acc = ${acc}, average = ${average}`); 
 
 
}

alert(`sum = ${sum}, acc = ${acc}, average = ${average}`);