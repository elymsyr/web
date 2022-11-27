/*

console.log("merhaba");
console.log(7000 + (6000 * 0.3));
console.log(5000 + (5000 * 0.3));

var numberOne = 7000;

console.log(numberOne + (6000 * 0.3));

var numberTwo = 6000;

console.log(numberOne + (numberTwo * 0.3));

var multiplication = .3;

console.log(numberOne + (numberTwo * multiplication));

// DEĞİŞKEN VERİ TÜRLERİ

var urunAd = "iphone 13"; //string
let urunFiyat = 15000;

console.log(typeof urunAd);
console.log(typeof urunFiyat);

let sayi1 = "10";
let sayi2 = "20";

console.log(sayi1 + sayi2);

console.log(Number(sayi1) + Number(sayi2));

console.log(sayi1.toString() + " " + sayi2.toString());

let sinav = 70;

let basariliMi = (sinav >= 50);

console.log(basariliMi);

let yas;

console.log(typeof yas);

*/


// WORD AND SENTENCE COUNTER

/*

// The algorithm counts "1.10.32" and "H." as one word.

let string = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."

let wordCount = 0;
let sentenceCount = 0;

for(i=0;i<=string.length;i++) {
    if(string[i] == " ") {
        wordCount++;
    }

    // or use .split method :/

    if(string[i] == "." && (!isNaN(string[i-1] * 1) && !isNaN(string[i+1] * 1))) {
        while(string[i] != " ") {
            i++;
        }
        wordCount++;
        continue;
    }

    if(string[i] == "." && (string[i-1].toUpperCase() && string[i-2] == " ")) {
        continue;
    }

    if(string[i] == "." && string[i+1] != " ") {
        wordCount++;
    }

    if(string[i] == ".") {
        sentenceCount++;
    }
}

console.log(`Word Counter : ${wordCount}`);
console.log(`Sentence Counter : ${sentenceCount}`);

*/

// PUSH-DOWN AUTOMATA E = { a^n b^n }

/*
let string = "aaaaaabbbbbb";
string = [...string];

var stack = ['S'];
var tapeHead;

let stringControl = true;

console.log(stack);

for(i=0;i<=string.length;i++){
    tapeHead = string[i];
    if (tapeHead == "a"){
        stack.push('A');
        console.log(stack);
    }
    else if(tapeHead == "b"){
        stack.pop();
        console.log(stack);
    }
    else
        break;
}

popped = stack.pop();
if (popped == "S") {
    stringControl = true;
}
else
    stringControl = false;

console.log(stringControl);
*/

