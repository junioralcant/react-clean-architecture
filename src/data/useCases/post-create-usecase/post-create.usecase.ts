import {IPostCreate} from '@domain/contracts';
import {PostModel, PostModelAPI} from '@domain/models';
import {IHttpClient} from '@infra/contracts';

import {postModelAdapter} from '..';

export class PostCreateUseCase implements IPostCreate {
  constructor(
    private readonly httpClient: IHttpClient<PostModelAPI>
  ) {}

  async create(params: IPostCreate.Params): Promise<PostModel> {
    const {data} = await this.httpClient.request({
      method: 'post',
      url: 'http://localhost:3333/posts',
      body: {
        title_post: params.title,
        body_post: params.body,
      },
    });

    return postModelAdapter.toPostModel(data);
  }
}
