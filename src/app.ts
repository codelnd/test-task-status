import items from "./constants/constants";
import TreeStore from "./components/TreeStore";

const ts = new TreeStore(items);

console.log("getAll", ts.getAll());
