// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");

function compareUtxos(param, param$1) {
  var c = Caml_primitive.caml_string_compare(param[/* txId */0], param$1[/* txId */0]);
  if (c !== 0) {
    return c;
  } else {
    return Caml_primitive.caml_int_compare(param[/* txOutputN */1], param$1[/* txOutputN */1]);
  }
}

var include = Belt_Id.MakeComparableU(/* module */[/* cmp */compareUtxos]);

var cmp = include[0];

var UtxoCmp = /* module */[
  /* compareUtxos */compareUtxos,
  /* cmp */cmp
];

var emptyUtxoSet = Belt_Set.make([cmp]);

exports.UtxoCmp = UtxoCmp;
exports.emptyUtxoSet = emptyUtxoSet;
/* include Not a pure module */