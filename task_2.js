/* Ubahlah kode yang ada di docs supaya terlihat lebih rapi! 
Jawab :
*/

class kendaraan {
    constructor(roda, kecepatan){
    roda = 0;
    kecepatan = 0;
    }
}

class mobil extends kendaraan {
    constructor(roda, kecepatan){
        super(roda, kecepatan);
    }

    berjalan(){
        tambahKecepatan(10);
    }

    tambahKecepatan(kecepatanBaru) {
        kecepatan = kecepatan + kecepatanBaru;
    }
}

main() {
    mobilCepat = new mobil();
    mobilCepat.berjalan();
    mobilCepat.berjalan();
    mobilCepat.berjalan();

    mobilLamban = new mobil();
    mobilLamban.berjalan();
}