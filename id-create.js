// Шестнадцатиричный код AAAAAAAABBCDDDDDD
// A метка времени (timestamp в секундах)
// B кластер
// C тип
// D идентификатор пользователя
// Все входные данные - целые десятичные числа

const date = new Date('May 01, 2020 08:46:56');
const claster = 58;
const type = 8;
const user = 5553663;

date_timestamp_16 = (date/1000).toString(16);


claster_16 = claster.toString(16);
type_16 = type.toString(16);
user_16 = user.toString(16);

id_result = date_timestamp_16 + claster_16 + type_16 + user_16;

console.log('id = 5eabb7d03a854bdff :', id_result);




