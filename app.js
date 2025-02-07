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

function lemparDadu(func) {
    func();
    func();
}

function duaKali() {
    const hasil = Math.floor(Math.random() * 6) + 1;
    console.log(hasil);
}
lemparDadu(duaKali)