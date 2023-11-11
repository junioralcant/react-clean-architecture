import {IPostCreate} from '../../../domain/contracts/post-create.contracts';
import {
  PostModel,
  PostModelAPI,
} from '../../../domain/models/post.model';
import {IHttpClient} from '../../../infra/contracts/http-client';

export class PostCreateUseCase implements IPostCreate {
  constructor(
    private readonly httpClient: IHttpClient<PostModelAPI>
  ) {}

  async create(params: IPostCreate.Params): Promise<PostModel> {
    await this.httpClient.request({
      method: 'post',
      url: 'http://localhost:3333/posts',
    });
  }
}
