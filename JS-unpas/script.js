// console.log('hello');
// var nama = 'masuka nama';
// // alert(x);
// nama = prompt(nama);
// alert('hello ' + nama);
// var konfir = confirm(`${nama} adalah nama kamu, yakin?`);
var n = '';
var i = '';
function akcak(n, i) {
  for (n; n <= i; n++) {
    if (n <= 6) {
      console.log('Angkot no. ' + n + ' beroperasi dengan baik');
    }
    else if (n === 7) {
      console.log('Angkot no. ' + n + ' tidak beroperasi');
    }
    else {
      console.log('Angkot no. ' + n + ' beroperasi dengan buruk');

    }
  }
}
// var acak = Math.random();

//ex: function declaration

function penjumlahan(a, b) {
  var total;
  total = a + b;
  return total;
}

// end function declaration

// ex: function expression

var pengurangan = function (c, d) {
  var sisa;
  sisa = c - d;
  return sisa;
}

// end function expression

// var coba = jumlahVolumeKubus(penjumlahan(3, 5), pengurangan(6, 3));
// alert(coba);

function jumlahVolumeKubus(sisiKubus1, sisiKubus2) {
  var volumeKubus1, volumeKubus2;
  volumeKubus1 = sisiKubus1 * sisiKubus1 * sisiKubus1;
  volumeKubus2 = sisiKubus2 * sisiKubus2 * sisiKubus2;
  var volumeTotal = volumeKubus1 + volumeKubus2;
  // return arguments;
  return volumeTotal;
  // return volumeKubus1 + volumeKubus2;
}
// alert(jumlahVolumeKubus(
//   parseInt(prompt('nilai 1')),
//   parseInt(prompt('nilai 2')))
// );

// function cobaArguments() {
//   return arguments;
// }
// console.log(cobaArguments(5, 8, 3, 'coba', "arguments"));

// ex: penggunaan arguments

function argsTambah() {
  var jumlah = 0;
  for (var i = 0; i < arguments.length; i++) {
    jumlah += arguments[i];
  }
  return jumlah;
}

// end penggunaan arguments

// feractoring sederhana(u/ menghemat dan menyederhanakan source code)

function pangkatKali(a, b, c) {
  var hasil = 1;
  for (var i = 0; i < a; i++) {
    hasil *= b;
  }
  return hasil * c;
}

// end refactoring sederhana
// jangan buat variabel jika tidak perlu


// ex: fungsi rekursif(fungsi yg memanggil dirinya sendiri)

function cetakAngka(angka) {
  if (angka === 6) {
    return;
  }
  console.log(angka);
  cetakAngka(angka - 1);
}

// memanggil fungsi
// cetakAngka(15);

// ex: faktorial u/ rekursif

function faktorial(faktor) {
  if (faktor === 0) return 1;
  // penggunaan return 1 berguna u/ mengembalikan nilai 1
  // sehingga pada bagian terakhi ketika faktor bernilai sama dengan 0,
  // maka akan mengembalikan 1 dan membuat perkalian berjalan lancar, jika hanya menuliskan return maka akan
  // mengembalikan 0, yg membuat perkaliannya bernilai 0 yang merupakan NAN(not a number)
  return faktor * faktorial(faktor - 1);
}

// console.log(faktorial(parseInt(prompt('masukan faktor n'))));

// end fungsi rekursif

// perbandingan function declaration(harus memiliki nama identifier) / expression(nama identifier opsional dan disimpan pada variabel)

/*function declaration
-lebih fleksibel(dpt ditulis dimanapun) => karena memiliki konsep Hoisting(dpt dipanggil sesudah / sebelum declaration)
*/


/*function expression
-harus dideklarasikan baru dipanggil
-lebih powerfull 
    => sebagai closure
    => sebagai argumen u/ function lain
    =>IIFE(Immediately invoked function expression)
*/
// end perbandingan function declaration(harus memiliki nama identifier) /expression(nama identifier opsional dan disimpan pada variabel)


// Materi Array
// manipulasi array
// 1.menambah isi array
var arr = [];
arr[0] = 'satu';
arr[1] = 'dua';
arr[2] = 'tiga';
arr[4] = 'empat';

// 2.menghapus isi array
arr[0] = undefined;

// 3.menampilkan isi array
// for (var i = 1; i <= arr.length; i++) {
//   console.log(arr[i]);
// }

// methode pada array
// 1.join
// console.log(arr.join());

// 2.push & pop
// push u/ menambah isi array pd bagian terakhir
arr.push('lima');
arr.push('enam', 'tujuh');
// pop u/ menghilangkan isi terakhir array
arr.pop();
arr.pop();
// 3.shift & unshift
// menambah elemen baru pd awall array
arr.unshift('tambahan');

// menghilangkan elemen pd awal array(benar" dihilangkan, tdk dibuat undifined)
arr.shift();

// 4.slice & splice
// splice u/ menyisipkan array pd tengah"
// syntax: splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaruKe-n..)
arr.splice(3, 0, 'tambahanSplice1', 'tambahanSplice2');

// slice u/ mengiris array menjadi array baru
// syntax: slice(awal, akhir)

var arr2 = arr.slice(2, 4);

// 5.foreach & map
var angka = [1, 2, 3, 4, 5, 6];

angka.forEach(function (a) {
  // console.log(a);
});

var nama = ['mhs-1', 'mhs2', 'mhs3', 'mhs4', 'mhs5'];
// nama.forEach(function (nama, i) {
//   console.log('mahasiswa ke-' + i + ' = ' + nama);
// }
// );

// map
var angka2 = angka.map(function (a) {
  return a * 2;
});

// console.log(angka2.join('-'));

// 6.sort u/ mengurutkan isi array
var angka3 = [1, 10, 2, 4, 3, 20, 15];

// sort dpt diberi parameter u/ jenis pengurutan ataupun tidak(default)
angka3.sort((a, b) => b - a);
// console.log(angka3.join('-'))

angka3.sort(function (a, b) {
  return a - b;
});

// console.log(angka3.join('-'))
// console.log(arr2);

// 7. filter dan find

// filter => u/ mencari nilai dan mengembalikan array
var cariA2 = angka3.filter(function (angka) {
  return angka === 2;
});

// console.log(cariA2); //hasil array
// bila tidak ketemu hasil array kosong
// u/ mencari angka dengan syarat
var cariA2 = angka3.filter(function (angka) {
  return angka > 2;
});

// console.log(cariA2.join('-'));


// find => hanya u/ menemukan 1 nilai, bukan array
var cariA2 = angka3.find(function (angka) {
  return angka > 2;
});

// console.log(cariA2);



// for (var i = 0; i <= arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(arr.length);
// end materi array



// Latihan juragan angkot
var penumpang = [];
// penumpang[0] = 'sukron';
// penumpang[2] = 'kapit';
function tambahPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    penumpang[0] = namaPenumpang;
    return penumpang;
    // console.log(penumpang);
  } else {

    for (var i = 0; i < penumpang.length; i++) {


      for (var n = 0; n < penumpang.length; n++) {
        if (penumpang[n] === namaPenumpang) {
          console.log('Sudah ada penumpang yang sama');
          return penumpang;
        }
      }

      if (penumpang[i] === undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }

      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }

    }

  }

}


function hapusPenumpang(namaPenumpang, penumpang) {

  if (penumpang.length === 0) {
    console.log('Angkot kosong!!!');
    return penumpang;
  }

  else {
    for (var i = 0; i < penumpang.length; i++) {

      if (penumpang[i] === namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      }

      else if (i === penumpang.length - 1) {
        console.log('Tidak ada nama penumpang tersebut');
        return penumpang;
      }

    }


  }


}
// console.log(penumpang)
// console.log(penumpang)
// if (penumpang[1] === undefined) {
//   // tambahPenumpang('sukron')
//   console.log(penumpang);
// }
// end juragan angkot




// materi object pada JS

// 1.membuat object

// membuat object dengan cara literal
var mhs1 = {
  nama: 'sukron',
  umur: 20,
  panggilan: ['sch 39', 'kpt', 'kapit'],
  alamat: {
    rt: '05',
    rw: '03',
    dsn: 'peganjing'
  }
}
var mhs2 = {
  nama: 'kapit',
  umur: 20,
  panggilan: ['sch 39', 'kpt', 'kapit'],
  alamat: {
    rt: '05',
    rw: '03',
    dsn: 'peganjing'
  }
}

var obj = {}
obj.halo = function () {
  console.log(this)
  console.log('hello')
}
var obj2 = { nama: 'sukron', nim: '190' }
obj2.halo = function () {
  console.log(this)
  console.log('hello')
}
// this pada object literal mengembalikan object tsb sendiri
// obj.halo();
// obj2.halo();

// membuat object dengan function declaration
function buatObjectMhs(nama, umur, panggilan, dsn) {

  var mhs1 = {}
  mhs1.nama = nama;
  mhs1.umur = umur;
  mhs1.panggilan = panggilan;
  mhs1.dsn = dsn;
  // console.log(this);
  // this pada function declaration mengembalikan scope/object global(window)
  return mhs1;

}

var mhs3 = buatObjectMhs('sukron', 20, 'sch', 'peganjing');
var mhs4 = buatObjectMhs('kapit', 20, 's.ch', 'ganjing');


// membuat object dengan cara constructur declaration(keyword new)
// nama function diawali huruf besar
function Mahasiswa(nama, umur, panggilan, dsn) {

  this.nama = nama;
  this.umur = umur;
  this.panggilan = panggilan;
  this.dsn = dsn;
  // this pd constructur mengembalikan window jika tdk memakai new,
  // mengembalikan object yg baru dibuat jika menggunakan new(new berfungsi u/ membuat object secara instan)
  // console.log(this);

}

var mhs5 = new Mahasiswa('sukron', 20, 'sch', 'peganjing');
var mhs6 = new Mahasiswa('kapit', 20, 'sch39', 'peganjing');

// konsep "this"
// this adalah keyword spesial yg secara otomatis telah didefinisikan pada pada setiap function/object

// console.log(this)



// end konsep "this"


// membuat object dengan Object.create()

// end membuat object


// Latihan object meneruskan Juragan Angkot

function buatObjectAngkot(sopir, trayek, penumpang, kas) {
  var angkot = {}
  angkot.sopir = sopir;
  angkot.trayek = trayek;
  angkot.penumpang = penumpang;
  angkot.kas = kas;

  angkot.penumpangNaik = function (namaPenumpang) {

    if (angkot.penumpang.length === 0) {
      angkot.penumpang.push(namaPenumpang);
      // console.log(angkot) === console.log(this)
      return angkot.penumpang;
      // this pada fungsi ini mengarah pada angkot
    } else {
      for (var i = 0; i < angkot.penumpang.length; i++) {

        // pengulangan u/ memstikan tidak ada nama yg sama
        for (var n = 0; n < angkot.penumpang.length; n++) {

          if (angkot.penumpang[n] === namaPenumpang) {
            console.log('Penumpang sudah naik');
            return angkot.penumpang;
          }
        }

        // jika ada bangku kosong maka diisi terlebih dahulu
        if (angkot.penumpang[i] === undefined) {
          angkot.penumpang[i] = namaPenumpang;
          return angkot.penumpang;
        }

        //jika nama tidak ada yg menyamai, maka push di akhir array 
        else if (i === angkot.penumpang.length - 1) {
          angkot.penumpang.push(namaPenumpang);
          return angkot.penumpang;
        }

      }
    }
  }

  angkot.penumpangTurun = function (namaPenumpang, bayar) {
    // jika angkot masih kosong
    if (angkot.penumpang.length === 0) {
      console.log('Angkot masih kosong!!!');
      return false;
    } else {
      for (var i = 0; i < angkot.penumpang.length; i++) {

        // jika penumpang turun dan  namanya ada
        if (angkot.penumpang[i] === namaPenumpang) {
          angkot.penumpang[i] = undefined;
          angkot.kas += bayar;
          return angkot.penumpang;
        }

        // jika nama penumpang tidak tersedia
        else if (i < angkot.penumpang.length - 1) {
          console.log('Nama penumpang tidak tersedia');
          return angkot.penumpang;
        }

      }
    }
  }
  return angkot;
}

var angkot1 = buatObjectAngkot('sukron', ['grobogan', 'pati'], [], 0);
var angkot2 = buatObjectAngkot('kapit', ['peganjing', 'ngrandah'], [], 0);



// end latihan object

// end materi object pada JS