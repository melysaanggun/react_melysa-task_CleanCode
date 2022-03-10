/*class user {
    var id;
    var username;
    var password;
}

class userservice {
    user[] users = [];

    user[] getallusers(){
        return users;
    }

    user getuserbyid(userid){
        return this.users.filter(userid);
    }
}
*/



/* Task Problem 1 
Soal : Berapa banyak kekurangan dalam penulisan kode tersebut? 
Jawab : 3

Soal : Bagian mana saja terjadi kekurangan tersebut dan sertakan alasan dari kekurangan!
Jawab : 
1. Blok class user 
2 Kekurangan, yaitu : 
Tidak terdapat constructor sehingga tidak terdeteksi deklarasi variabel. Constructor harus selalu ada di setiap class. 

2. Penambahan kata user pada awal method salah. 
Seharusnya, langsung diawali penamaan nama method 

Kode yang benar :
*/


class User {
    constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
    }
}

class UserService extends User {
    constructor(id, username, password){
        super(id, username, password);
    }

    getallusers(){
        return users;
    }

    getuserbyid(userId){
        return this.users.filter(userid);
    }
}