interface ITreeItems {
  id: number | string;
  parent: number | string;
  type?: string | null;
}

type TypeId = number | string;

export { ITreeItems, TypeId };
