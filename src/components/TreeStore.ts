import { ITreeItems, TypeId } from "../models/models";

class TreeStore {
  private _arr;

  constructor(arr: ITreeItems[]) {
    this._arr = arr;
  }

  public getAll() {}

  public getItem(id: TypeId) {}

  public getChildren(id: TypeId) {}

  public getAllChildren(id: TypeId) {}

  public getAllParents(id: TypeId) {}
}

export default TreeStore;
