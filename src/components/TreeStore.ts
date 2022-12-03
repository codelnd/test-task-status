import { ITreeItems, TypeId } from "../models/models";

class TreeStore {
  private readonly _arr;
  private _childrenArr: any[];

  constructor(arr: ITreeItems[]) {
    this._arr = arr;
    this._childrenArr = [];
  }

  public getAll(): ITreeItems[] {
    return this._arr;
  }

  public getItem(id: TypeId): ITreeItems | undefined {
    return this._arr.find((obj) => (obj.id == id ? obj : null));
  }

  public getChildren(id: TypeId): ITreeItems[] {
    return this._arr.filter((obj) => (id == obj.parent ? obj : null));
  }

  public getAllChildren(id: TypeId): ITreeItems[] {
    this._arr.forEach((obj) => {
      if (id == obj.parent) {
        this._childrenArr.push(obj);
        this.getAllChildren(obj.id);
        return;
      }
    });
    return this._childrenArr.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  public getAllParents(id: TypeId) {}
}

export default TreeStore;
