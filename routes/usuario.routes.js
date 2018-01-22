var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Usuario = require('../model/usuario.model.js');

/* GET TODOS USUARIOS */
router.get('/', function(req, res, next) {
  Usuario.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET 1 USUARIO PELO ID */
router.get('/:id', function(req, res, next) {
  Usuario.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SALVA USUARIO */
router.post('/', function(req, res, next) {
  Usuario.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* ATUALIZA USUARIO */
router.put('/:id', function(req, res, next) {
  Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETA USUARIO */
router.delete('/:id', function(req, res, next) {
  Usuario.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;