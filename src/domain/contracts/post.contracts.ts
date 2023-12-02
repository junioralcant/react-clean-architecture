import {PostModel} from '@domain/models';

export interface IPostList {
  list(): Promise<IPostList.Model>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IPostList {
  export type Model = PostModel[];
}
