import items from "./constants/constants";
import TreeStore from "./components/TreeStore";

const ts = new TreeStore(items);

console.log("getAll", ts.getAll());
console.log("getItem", ts.getItem(5));
console.log("getChildren", ts.getChildren("4"));
console.log("getAllChildren", ts.getAllChildren(2));
