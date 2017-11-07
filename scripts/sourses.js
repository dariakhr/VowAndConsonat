function VowelInWord(word) {
var VOWEL = [ 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
var count = 0;
var consonats_count = 0;
var i = 0;
var arr = word.split('');
while (i < arr.length) {
 if (VOWEL.indexOf(arr[i]) != -1) {
   count++;
 }
 i++;
}
return count;
}


function ConsonatsInWord(word) {
var CONSONATS = ['б', 'в', 'г', 'д', 'ж', 'з','й', 'к', 'л', 'м', 'н','п', 'р', 'с', 'т','ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь'];
var consonats_count = 0;
var i = 0;
var arr = word.split('');
while (i < arr.length) {
 if (CONSONATS.indexOf(arr[i]) != -1) {
   consonats_count++;
 }
 i++;
}
return consonats_count;
}
