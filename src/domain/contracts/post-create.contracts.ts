import {PostModel} from '@domain/models';

export interface IPostCreate {
  create(params: IPostCreate.Params): Promise<PostModel>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IPostCreate {
  export type Params = {
    title: string;
    body: string;
  };
}
