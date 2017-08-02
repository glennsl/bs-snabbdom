// Generated by BUCKLESCRIPT VERSION 1.8.2, PLEASE EDIT WITH CARE
'use strict';

import * as Snabbdom     from "snabbdom";
import * as Js_primitive from "bs-platform/lib/es6/js_primitive.js";


    var bs_snabbdom = {
        empty_data: function() { return {}; },
        set_in_path: function(data, path, value){
            var base = data || {};
            var ref = base;
            while(path.length > 1){
                var next = path.shift();
                ref[next] = ref[next] || {};
                ref = ref[next];
            }
            if(path.length == 1) {
                var next = path.shift();
                ref[next] = value;
            }
            return base;
        }
    };
    
;

function empty() {
  return bs_snabbdom.empty_data();
}

function set_in_path(data, path, value) {
  return bs_snabbdom.set_in_path(data, path, value);
}

var Data = /* module */[
  /* empty */empty,
  /* set_in_path */set_in_path
];

function VNode_000(prim) {
  return prim.elm;
}

function VNode_001(prim) {
  return prim;
}

var VNode = [
  VNode_000,
  VNode_001
];

function h(prim, prim$1, prim$2) {
  return Snabbdom.h(prim, prim$1, prim$2);
}

function h_text(prim, prim$1, prim$2) {
  return Snabbdom.h(prim, prim$1, prim$2);
}

function init(prim) {
  return Snabbdom.init(prim);
}

function Dom_000(prim) {
  prim.focus();
  return /* () */0;
}

function Dom_002(prim, prim$1) {
  return Js_primitive.null_to_opt(prim.getElementById(prim$1));
}

function Dom_003(prim) {
  prim.stopPropagation();
  return /* () */0;
}

function Dom_004(prim) {
  prim.preventDefault();
  return /* () */0;
}

function Dom_005(prim) {
  return prim.target;
}

function Dom_006(prim) {
  return prim.value;
}

function Dom_007(prim) {
  return +prim.checked;
}

function Dom_008(prim, prim$1) {
  return setTimeout(prim, prim$1);
}

var Dom = [
  Dom_000,
  document,
  Dom_002,
  Dom_003,
  Dom_004,
  Dom_005,
  Dom_006,
  Dom_007,
  Dom_008
];

export {
  Data   ,
  VNode  ,
  h      ,
  h_text ,
  init   ,
  Dom    ,
  
}
/*  Not a pure module */