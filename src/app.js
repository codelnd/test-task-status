"use strict";
exports.__esModule = true;
var constants_1 = require("./constants/constants");
var TreeStore_1 = require("./components/TreeStore");
var ts = new TreeStore_1["default"](constants_1["default"]);
console.log("getAll", ts.getAll());
console.log("getItem", ts.getItem(5));
