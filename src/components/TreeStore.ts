import { ITreeItems, TypeId } from "../models/models";

class TreeStore {
  private readonly _arr;

  constructor(arr: ITreeItems[]) {
    this._arr = arr;
  }

  public getAll(): ITreeItems[] {
    return this._arr;
  }

  public getItem(id: TypeId) {}

  public getChildren(id: TypeId) {}

  public getAllChildren(id: TypeId) {}

  public getAllParents(id: TypeId) {}
}

export default TreeStore;
