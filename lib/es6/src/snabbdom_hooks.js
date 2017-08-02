// Generated by BUCKLESCRIPT VERSION 1.8.2, PLEASE EDIT WITH CARE
'use strict';

import * as Snabbdom_base     from "./snabbdom_base.js";
import * as Snabbdom_external from "./snabbdom_external.js";

function hook(key, cb) {
  var partial_arg = /* array */[
    "hook",
    key
  ];
  return (function (param) {
      return Snabbdom_base.set_data_path(partial_arg, cb, param);
    });
}

var hook0 = hook;

var hook1 = hook;

var hook2 = hook;

function insert(cb) {
  return hook("insert", cb);
}

var autofocus = hook("insert", (function (n) {
        Snabbdom_external.Dom[/* focus */0](Snabbdom_external.VNode[/* get_elm */0](n));
        return /* () */0;
      }));

var Ex = 0;

export {
  Ex        ,
  hook      ,
  hook0     ,
  hook1     ,
  hook2     ,
  insert    ,
  autofocus ,
  
}
/* autofocus Not a pure module */