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


const balonku = prompt('Balon warna apa punya kamu?');

switch (balonku) {
    case 'merah':
        console.log('Ini balon ku');
        break;
    case 'hijau':
        console.log('ddoo oo oorr');
        break;
    default:
        console.log('nah ini gatau dah nih punya sapa nih')
}