let simdi = new Date(); // şimdiki tarih - saat

// Get Methods
sonuc = simdi;
sonuc = simdi.getDate();    // gün
sonuc = simdi.getDay();     // 0: pazar 6: cumartesi
sonuc = simdi.getFullYear(); // yıl
sonuc = simdi.getHours();   // saat
sonuc = simdi.getTime();

// Set Methods
// simdi.setFullYear(2025);
simdi.setMonth(7);          // 0: Ocak
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;     // saniye
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;
let yil = gun / 364;

sonuc = yil;

console.log(sonuc);

let zaman = [yil, gun, saat, dakika];
let zamanString = ["yil", "gun", "saat", "dakika"];


console.log(typeof sonuc);

for (i=0; i<zaman.length;i++){
    console.log(zaman[i].toFixed(0) + " " + zamanString[i]);
}

