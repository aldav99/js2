var invalid = true;
var matches_array;
var arr_short_month = [4,6,9,11];

var isLeap = function(year) {
    if ((year % 4 != 0) || (year % 100 == 0) && (year % 400 != 0)){
        return false;
    } else { 
        return true;
    }    
};

const regexp = /(^\d{1,2})\/(\d{1,2})\/(\d{1,4})/;

while ( invalid ) {
   date = prompt("Введите дату в американском формате ММ/ЧЧ/ГГГГ");
   
   matches_array = date.match(regexp);

   if (matches_array) {
        mm = parseInt(matches_array[1]);
        dd = parseInt(matches_array[2]);
        yyyy = parseInt(matches_array[3]);

        if (mm < 1 || mm > 12 || dd < 1) continue;

         if ( mm == 2 ) {
            if (isLeap(yyyy)) {
                if (dd > 29) continue;
            } else { 
                if (dd > 28) continue;
            }
        }
 
        if (arr_short_month.includes(mm)) {
            if (dd > 30) continue;
        } else { 
            if (dd > 31) continue;
        }
        
        if (dd < 10) { dd = '0' + dd };

        if (mm < 10) { mm = '0'+ mm };

        alert(`Российский формат: ${dd}.${mm}.${yyyy}`);
        
        
        invalid = false;
    }
} 

alert(`-------СПАСИБО!------`);



