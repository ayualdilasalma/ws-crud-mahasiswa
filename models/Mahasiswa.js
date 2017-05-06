/**
 * Created by dilacim on 5/5/2017.
 */
var db = require('../dbConnection');

var Mahasiswa = {
    
    getAllMahasiswa: function (callback) {
        return db.query("SELECT * FROM mahasiswa", callback);
    },

    getMahasiswaById: function (id, callback) {
        return db.query("SELECT * FROM mahasiswa WHERE nrp=?", [id], callback);
    },
    addMahasiswa: function (Mahasiswa, callback) {
        return db.query("INSERT INTO mahasiswa VALUES (?, ?, ?, ?)", [Mahasiswa.Nrp, Mahasiswa.Nama, Mahasiswa.Kota, Mahasiswa.ipk], callback);
    },
    deleteMahasiswa: function (id, callback) {
        return db.query("DELETE FROM mahasiswa WHERE nrp = ?", [id], callback);
    },
    updateMahasiswa: function (id, Mahasiswa, callback) {
        return db.query("UPDATE mahasiswa SET nama = ?, kota_asal = ?, ipk = ? WHERE nrp = ?", [Mahasiswa.nama, Mahasiswa.kota, Mahasiswa.ipk, id], callback);
    }
};

module.exports = Mahasiswa;