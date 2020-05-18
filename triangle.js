let side;
let area;

do {
    side = prompt("Введите длину стороны (положжительное число)");
    side = parseFloat(side);
} while ( isNaN(side) || side <= 0);

area = Math.pow(side, 2) * Math.sqrt(3)/4;

alert(`area = ${area}`);
