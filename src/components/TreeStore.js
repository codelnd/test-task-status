"use strict";
exports.__esModule = true;
var TreeStore = /** @class */ (function () {
    function TreeStore(arr) {
        this._arr = arr;
        this._childrenArr = [];
    }
    TreeStore.prototype.getAll = function () {
        return this._arr;
    };
    TreeStore.prototype.getItem = function (id) {
        return this._arr.find(function (obj) { return (obj.id == id ? obj : null); });
    };
    TreeStore.prototype.getChildren = function (id) {
        return this._arr.filter(function (obj) { return (id == obj.parent ? obj : null); });
    };
    TreeStore.prototype.getAllChildren = function (id) {
        var _this = this;
        this._arr.forEach(function (obj) {
            if (id == obj.parent) {
                _this._childrenArr.push(obj);
                _this.getAllChildren(obj.id);
                return;
            }
        });
        return this._childrenArr.sort(function (a, b) { return (a.id > b.id ? 1 : -1); });
    };
    TreeStore.prototype.getAllParents = function (id) { };
    return TreeStore;
}());
exports["default"] = TreeStore;
