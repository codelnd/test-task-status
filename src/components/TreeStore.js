"use strict";
exports.__esModule = true;
var TreeStore = /** @class */ (function () {
    function TreeStore(arr) {
        this._arr = arr;
    }
    TreeStore.prototype.getAll = function () {
        return this._arr;
    };
    TreeStore.prototype.getItem = function (id) { };
    TreeStore.prototype.getChildren = function (id) { };
    TreeStore.prototype.getAllChildren = function (id) { };
    TreeStore.prototype.getAllParents = function (id) { };
    return TreeStore;
}());
exports["default"] = TreeStore;
