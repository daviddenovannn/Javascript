// let angka = Math.random()
// console.log(angka);

// if (angka >= 0.5) {
//     console.log('lebih besar');
// }

// if (angka <= 0.5) {
//     console.log('lebih kecil');
// }


// const HariIni = prompt("Isikan hari").toLowerCase();

// if (HariIni === 'senin') {
//     console.log('Semangat kerja nya yah!!');
// } else if (HariIni === 'sabtu') {
//     console.log('Happy weekend');
// } else {
//     console.log('hari hari biasa aje ini mah bray');
// }

// const password = prompt('Masukkan password baru!');

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Password valid');
// } else {
//     console.log('Password tidak sesuai');
// }
// penjelasan yang bawah disederhanakan di penjelasan diatas
// if (password.length >= 6) {
//     if (password.indexOf(' ') == -1) {
//         console.log('tidak boleh ada spasi');
//     } else {
//         console.log('Password tidak menggunakan spasi');
//     }
// } else {
//     console.log('Password at least banget 6 karakter lah');
// }


// const nilai = 60;

// if (nilai < 50) {
//     console.log('E');
// } else if (nilai < 60) {
//     console.log('D');
// } else if (nilai < 70) {
//     console.log('C');
// } else if (nilai < 80) {
//     console.log('B');
// } else if (nilai < 100) {
//     console.log('Selamat anda mendapat nilai A');
// }


// const user = prompt('User apa? ');

// if (user === 'admin' || user === "developer") {
//     console.log('Anda mendapatkan hak akses');
// } else {
//     console.log('Maaf, anda tidak mendapatkan akses')
// }



// const user = prompt('user apa kamu?');

// if (user !== 'admin') {
//     console.log('Hak akses ditolak');
// } else {
//     console.log('Anda telah mendapatkan hak akses');
// }


// const balonku = prompt('Balon warna apa punya kamu?');

// switch (balonku) {
//     case 'merah':
//         console.log('Ini balon ku');
//         break;
//     case 'hijau':
//         console.log('ddoo oo oorr');
//         break;
//     default:
//         console.log('nah ini gatau dah nih punya sapa nih')
// }

// const animals = ['kucing', 'anjeng', 'babi'];
// for (let i = 0; i < animals.length; i++) {
//     console.log(i + 1, animals[i])
// }
// jadi i dimulai dari 0, kemudian kondisi nya itu i lebih kecil dari animals length, maksud nya ialah
// panjang dari index objec animals ini. kemudian ditambahkan dengan increment sampai memenuhi kondisi
// kemudian keluar kan output dari index i, dan juga value dari indexs animals.



//nested loop

// let str = 'LOL';
// for (let i = 0; i <= 4; i++) {
//     console.log('outer :', i);
//     for (let j = 0; j < str.length; j++) {
//         console.log('Inner :', str[j]);
//     }
// }

// let pilgan = 'abcd';

// for (let i = 1; i <= 4; i++) {
//     console.log(`${i}. Soal nomor ${i}`);
//     for (let j = 0; j < pilgan.length; j++) {
//         console.log(`${pilgan[j]}. pilihan jawaban`)
//     }
// }


// menampilkan dari nested array menggunakan nested loop
// kasus ini biasa di pakai untuk shopping chart

// const student = [
//     ['David', 'Alda', 'Donovan', 'marandy'],
//     ['Rian', 'Ninda', 'Oky', 'Okynz'],
//     ['Retri', 'Alda', 'Yejin', 'Tinka'],
// ];

// for (let i = 0; i < student.length; i++) {
//     const row = student[i];
//     console.log(`  seatrow #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// ini kasus lain jika team 1 mempunyai 3 anggota
// pake kondisi team. Kasus nya sama hanya beda pada penyebutan key nua
// const gembalaSenior = [
//     ['Jones', 'Donald', 'Anang'],
//     ['Kepas', 'Fandy', 'Frengky'],
//     ['ucok', 'seto', 'Martin'],
// ];

// for (g = 0; g < gembalaSenior.length; g++) {
//     const domba = gembalaSenior[g];
//     console.log(`domba ${g + 1}`);
//     for (let p = 0; p < domba.length; p++) {
//         console.log(`  ${domba[p]}`);
//     }
// }

// for (let jemaat of gembalaSenior) {
//     for (let gereja of jemaat) {
//         console.log(`G ${gereja}`)
//     }
// }
// for (i = 0; i < gembalaSenior.length; i++) {
//     const team = gembalaSenior[i];
//     console.log(`team #${i}`);
//     for (let j = 0; j < team.length; j++) {
//         console.log(`  ${team[j]}`);
//     }
// }


// for (let domba of gembalaSenior) {
//     for (let gereja of domba) {
//         console.log(gereja)
//     }
// }


// mencoba perulangan menggunakan while
// let angka = 0;
// while (angka < 10) {
//     console.log(angka);
//     angka++;
// }


//studi kasus input password menggunakan while

// const PASSWORD = 'admin1234';

// let guess = prompt('Masukkan Password');
// while (guess !== PASSWORD) {
//     guess = prompt('Password Salah')
// }

// alert('Selamat Datang');


// const gmail = 'david@gmail.com';

// let tamu = prompt('Masukkan Email');
// while (tamu !== gmail) {
//     prompt('Email tidak sesuai')
// }

// alert('Selamat email anda sudah benar')


// let input = prompt('kata kata nya hari ini mas coding');
// while (true) {
//     input = prompt(input);(
//     if (input.toLocaleLowerCase === 'stop') break;
// }
// alert('selamat berhasil menyestop kan')


// for (let j = 0; j < 11000; j++) {
//     console.log(j);
//     if (j === 100) break;
// }


// membuat game tebak tebakan angka
// let maximal = parseInt(prompt('Masukkan nilai maksimal'));

// while (!maximal) {
//     maximal = parseInt(prompt('Masukkan nilai maksimal'));
// }
// const targetAngka = Math.floor(Math.random() * maximal) + 1;
// console.log(targetAngka);


// let tebak = parseInt(prompt('isikan tebakan angka kamu!'));
// let coba = 1;

// while (parseInt(tebak) !== targetAngka) {
//     coba++;
//     if (tebak > targetAngka) {
//         tebak = parseInt(prompt('Angkanya terlalu besar, tebak lagi !'));
//     } else {
//         tebak = parseInt(prompt('Angkanya terlalu kecil, tebak lagi !'));
//     }
// }

// alert(`WOW!! Selamat, Tebakan angka anda benar! Anda sudah mencoba sebanyak ${coba} kali`)



// array for of

//tarolah terlebih dahulu dsni kita menggunakan for biasa

// const buah = ['mangga', 'melon', 'duku']

// for (let i = 0; i < buah.length; i++) {
//     console.log(buah[i]);
// }


// for (i of buah) {
//     console.log(i)
// }


// const buyerShoes = {
//     agus: 42,
//     rian: 44,
//     epen: 46,
//     baconk: 40,
//     ujang: 41,
// };

// // versi mengeluarkan data dari object menggunakan for in
// for (let size in buyerShoes) {
//     console.log(`${size} memiliki size sepatu ${buyerShoes[size]}`)
// }

// //size sepatunya sudah dapat kemudian kita buat rata rata dari size sepatunya.
// // mengubah data objet menjadi array kemudian data array nya di ambil rata ratany
// let average = 0;
// let size = Object.values(buyerShoes);
// for (let sizes of size) {
//     average += sizes;
// }
// console.log(average / size.length) //outputnya pasti 42.6


// // menggabungkan parameter,function, dan argument didalam prompt
// function menyapa(name) {
//     console.log(`Hallo ${name} Selamat pagi, Selamat beraktifitas `);
// };
// //menyapa('David')
// menyapa(prompt('Masukkan Nama yang ingin disapa'))

// function tambah(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'bukan angka';
//     }
//     return a + b;
//     //     const total = a + b;
//     //     return total;
//     //     console.log
// }

//variabel sesuai scope atau ruang lingkup
// let programming = 'javascript';

// function code() {
//     programming = 'typescript';
//     console.log(programming)
// }

// code();
// console.log(programming)

//blocked scope variabel

// let tinggi = 8;

// if (tinggi > 5) {
//     tinggi = 10;
// }
// console.log(tinggi)


// for (index = 0; index < 10; index++) {
//     var indexNumber = index;
//     // console.log(indexNumber)
// }
// console.log(indexNumber)

//lexical scope
// function lamarkerja() {
//     const programmer = 'FrontEnd';
//     function testing() {

//         function infoLoker() {
//             let loker = `Perusahaan A sedang mencari seseorang ${programmer}`;
//             console.log(loker)
//         }

//         infoLoker()
//     }
//     testing()
// }


// FUNCTION EXSPRESSION
// versi 1
// function perkalian(nilai) {
//     return nilai * nilai;
// };

// let hasil = perkalian(5);
// console.log(hasil);

// // versi 2
// const pembagian = function (nilai, pembanding) {
//     return nilai * pembanding;
// };
// pembagian(5, 2);

//jadi function exspression ini bisa memperbanyak parameter


// function sebagai argument function lain

// function lemparDadu(func) {
//     func();
//     func();
// }

// function duaKali() {
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }
// lemparDadu(duaKali)


// dari sini ketauan bahwa nilai return bisa membalikan suatu function
// juga bisa melakukan nilai balik, jadi tidak melulu tipe data.
// function matRandom() {
//     const rand = Math.random()
//     if (rand > 0.1) {
//         return function () {
//             console.log('Wah hasil nya besar sekali');
//         };
//     } else {
//         return function () {
//             console.log('yah hasil nya kekecilan nich');
//         }; //karna hasil nya sekrang di console(tools web browser ini) function
//         // jadi bagaimana supaya nilainya keluar??
//         // perlu function nya ini di jadikan variabel terlebih dahulu kemudian..
//         // nilainya dikeluarkan dengan memanggil variabel nya.
//         // let hasil = matRandom()
//         // hasil()
//     }
// }

// medefinisikan sebuah method dalam javascript

// const MyMath = {
//     perkalian: function (x, y) {
//         return x * y;
//     },
// };
// pas memanggil nya perlu di ingatkan ialah
// dengan cara nama object kemudian nama method nya
// contoh : MyMath.perkalian

// mendefinisikan this di javascript
// this adalah keyword untuk memanggil property
// pada object yang sama
// tujuan nya untuk memanggil nilainya

// const saya = {
//     nama: 'David',
//     umur: 24,
//     hobi: 'Olahraga',
//     perkenalkan: function () {
//         return `Hai, Perkenalkan. Nama Saya ${this.nama}, saat ini saya berumur ${this.umur}. Saya sangat suka sekali ${this.hobi}`
//     }

// };


//implementasi try n catch
// function teriak(msg) {
//     try {
//         console.log(msg.toUpperCase())
//     } catch (error) {
//         console.log(error);
//         console.log('silakan masukkan tipe data string pada argument teriak()');
//     }
// }


// implementasi forEach method

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// angka.forEach(function (n) {
//     console.log(n * n)
// }) meng kali kan dengan diri nya sendiri.

// const angka = [1, 2, 3, 4, 5, 6, 7];

// function cetak(element) {
//     console.log(element);
// }

// angka.forEach(cetak) //hasil nya ber urutan sesuai array


// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// });


// const movies = [
//     {

//         title: 'jandara',
//         rating: 85,
//         year: 2005,
//     },
//     {

//         title: 'Pengabdi Badut',
//         rating: 70,
//         year: 2011,
//     },
//     {

//         title: 'Kkr Desa durian runtuh ',
//         rating: 65,
//         year: 2012,
//     },
//     {

//         title: '365',
//         rating: 90,
//         year: 2024,
//     },
// ];

// contoh nih mau menampilkan angka rating dari daftar film diatas
// pakai keterangan juga.
// const moviesRating = movies.filter((movie) => {
//     // return movie.rating >= 80;
//     if (movie.rating >= 80) {
//         console.log(`movie yang bagus itu ${movie.title} dengan rating ${movie.rating} dengan tahun ${movie.year}`)
//     }
// })

// const moviesTitle = movies.filter((film) => {
//     if (film.year > 2015) {
//         console.log(`Movie modern adalah ${film.year} dengan rating ${film.rating} yang berjudul ${film.title}`);
//     }

// })


// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.rating} / 100`);
// });


//menambahkan map method

// const hitungan = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// const angkaLipat = hitungan.map(function (no) {
//     return no * 2;
// });

// const cinema = movies.map(function (movie) {
//     return movie.rating;
// });



// arrow function session
//function biasa
// const pembagian = (p) => {
//     return p / p;
// }
// pembagian(5)

// //function exspression
// const hasil = function (x) {
//     return x + x;
// }
// hasil(5)


//arrow function
// arrow function ini hampir sama degan funciton exspression

// const perhitungan = (n) => { // menggunakan dalam kurung
//     return n * n;
// }
// perhitungan(6)

// const perhitungan = n => { // bisa aja ga didalam kurung kalo parameter nya 1 aj
//     return n * n; // tapi kalo parameter ya 2 wajib pake dalam kurung
// }
// perhitungan(6)

// studi kasus parameter nya itu null atau spasi aje


// return secara implisit pakai scope kurung biasa dan tidak menggunakan return
// const random = () => (
//     Math.floor(Math.random() * 1000)
// )

// return secara implisit dengan 1 line aja
// const acak = () => Math.floor(Math.random() / 10)


// menerapkan setTimeout
// console.log('hai kamuuu')
// setTimeout(() => {
//     console.log('kalau aku chat ada yang marah gak?')
// }, 3000);


// //menerapkan setInterval
// console.log('hai bales dong')
// setInterval(() => {
//     console.log('woi')
// }, 2000)

// setInterval(() => {
//     console.log(Math.random())
// }, 5000)





// memilih data dalam array pake filter method
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// const angkaGanjil = angka.filter((n) => {
// return n % 2 === 1; //jika di modulus 2 dan hasil nya 1 maka itu adalah ganjil
// kenapa  ' % ' karna itu adalah simbol dari modulus


// contoh kondisi lain, misalkan tampilkan angka yang dibawha 5
// return n < 5;

//tampilkan angka yang diaatas 5
// return n > 5;
// })




//MECOBA METHOD EVERY DAN SOME

// const animes = [
//     {
//         title: 'Boku no pico',
//         year: 1999,
//         rating: 75,
//     },
//     {
//         title: 'Movie Red One Piece',
//         year: 2023,
//         rating: 89,
//     },
//     {
//         title: 'Boku No Hero Academy',
//         year: 2021,
//         rating: 85,
//     },
//     {
//         title: 'Naruto Shippuden',
//         year: 2000,
//         rating: 90,
//     },
// ];

// const animeOverrated = animes.some((anime) => anime.year <= 10);



// versi every method

// const nilai = [80, 90, 95, 77];
// const nilaiA = nilai.some((score) => score >= 70);


// mengimplementasikan reduce method


// const nama = ['david', 'donovan', 'morandy', 'samosir'];

// const NamaLengkap = nama.reduce((perNama, namaYangAd) => {
//     return perNama + " " + namaYangAd;
// },);


// const subTotal = [10, 20, 30, 40, 50];

// const total = subTotal.reduce((currentTotal, subTotalNow) => {
//     return currentTotal + subTotalNow;
// })


// const animes = [
//     {
//         title: 'Boku no pico',
//         year: 1999,
//         rating: 75,
//     },
//     {
//         title: 'Movie Red One Piece',
//         year: 2023,
//         rating: 89,
//     },
//     {
//         title: 'Boku No Hero Academy',
//         year: 2021,
//         rating: 85,
//     },
//     {
//         title: 'Naruto Shippuden',
//         year: 2000,
//         rating: 90,
//     },
// ];

// const rateAnime = animes.reduce((rateAnime, curAnime) => {
//     console.log(rateAnime, curAnime) // menampilkan proses nya
//     if (curAnime.rating > rateAnime.rating) {
//         return curAnime;
//     }
//     return rateAnime;
// });

//object this di dalam arrow function mengarah pada object global window

// const person = {
//     firstName: "David",
//     lastName: "Donovan ",
//     fullName: function () {
//         console.log(this); //menampilkan proses saja
//         return `${this.firstName} ${this.lastName}`;
//     },

//     panggilNanti: function () {
//         setTimeout(function () {
//             console.log(this);
//             console.log(this.fullName());
//         }, 3000);
//     },
// };
// jadi supaya tidak memanggil object window atau global.
// maka baiknya harus menggunakan regular function saja.

// mengatur default valaue pada function

// function lemparDadu(sisi) { //(sisi = 6 ) // kalau default
//     return Math.floor(Math.random() * sisi) + 1;
// }
// nah ini blm menaru nilai default kedalam parameter nya.


//contoh yang nilai defaultny sudah ada

// function menyapa(name = 'donovan', greet = 'ganteng') {
//     console.log(`${greet}, ${name}`);
// }


// mengubah nilai array atau object menjadi deret value argument function
// const nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Math.max(nomor) // yang ini maaka output nya akan NaN
// Math.max(...nomor) //mengubah array menjadi deret value argument function

//menggabungkan nilai array dengan array lainnya.

// const arrayAngka = [1, 2, 3, 4, 5];
// const arrayString = ['david', 'cici', 'coco', 'caca', 'alda ', 'sayangku', 'wkwkwk'];

// const campuran = [...arrayAngka, ...arrayString];


// menggabungkan property objek dengan property lainnya
// const user = {
//     name: 'david',
//     email: 'daviddenovannn@gmail.com',
// };

// const userDb = { ...user, role: 'Admin' }


// malas bikin parameter banyak bisa pakai rest params

const nama = ['david', 'donovan', 'morandy', 'samosir', 'aldy', 'aqli', 'iky'];
const Pemenang = (Platinum, Gold, Silver, ...sisa) => {
    console.log(`Rank tertinggi adalah PLATINUM yang dimiliki oleh:  ${Platinum}`);
    console.log(`Rank tertinggi kedua adalah GOLD yang dimiliki oleh:  ${Gold}`);
    console.log(`Rank tertinggi ketiga adalah Silver yang dimiliki oleh:  ${Silver}`);
    console.log(`Rank lower adalah bronze & iron yang dimiliki oleh:  ${sisa}`);
}