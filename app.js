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

// for (i = 0; i < gembalaSenior.length; i++) {
//     const team = gembalaSenior[i];
//     console.log(`team #${i}`);
//     for (let j = 0; j < team.length; j++) {
//         console.log(`  ${team[j]}`);
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