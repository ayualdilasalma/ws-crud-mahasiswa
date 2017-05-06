/**
 * Created by dilacim on 5/5/2017.
 */
var express = require('express');
var router = express.Router();
var Mahasiswa = require('../models/Mahasiswa');

router.get('/:id?', function (req, res, next) {
    if ( req.params.id ) {
        Mahasiswa.getMahasiswaById(req.params.id, function (err, rows) {
            if ( err ) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        Mahasiswa.getAllMahasiswa( function (err, rows) {
            if ( err ) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })
    }
});

router.post('/', function (req, res, next) {
   Mahasiswa.addMahasiswa(req.body, function (err, count) {
       if ( err ) {
           res.json(err);
       }
       else {
           res.json(req.body);
       }
   });
});

router.delete('/:id', function (req, res, next) {
    Mahasiswa.deleteMahasiswa(req.params.id, function (err, count) {
        if ( err ) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

router.put('/:id', function (req, res, next) {
   Mahasiswa.updateMahasiswa(req.params.id, req.body, function (err, rows) {
       if ( err ) {
           res.json(err);
       }
       else {
           res.json(rows);
       }
   });
});

module.exports = router;
