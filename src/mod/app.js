"use strict";

var W = require( "x-widget" ).getById;

function $(id) {
    return window.document.getElementById(id);
}

exports.refresh = function() {
  var price = 0;
  ['model', 'color', 'jantes', 'motor'].forEach(function (id) {
    var key = W(id).value;
    price += parseFloat(key.substr(1));
  });
  
  var options = {
    media: 300,
    confort: 150,
    confortPlus: 150,
    radar: 200,
    smog: 150,
    speed: 150,
    wheel: 130
  };
  var id;
  for( id in options ) {
    if( W(id).value ) {
      price += options[id];
    }
  }
  
  $('price').textContent = price;
};

exports.start = function() {
  window.setTimeout( exports.refresh, 300 );
};