import {describe, expect, it} from 'vitest';
import {PostListUseCase} from './post-list.usecase';

import {PostModel} from '../../../domain/models/post.model';
import {AxiosHttpClientInMemory} from '../../../infra/implementations/axios-http-client/in-memory/axios-http-client.in.memory';
import {postsListAPIMock} from '../../mocks/post-list.mock';

type SutParam = {
  axiosHttpClientInMemory?: AxiosHttpClientInMemory;
};

function makeSut({
  axiosHttpClientInMemory = new AxiosHttpClientInMemory(),
}: SutParam = {}) {
  const sut = new PostListUseCase(axiosHttpClientInMemory);
  return {sut, axiosHttpClientInMemory};
}

describe('PostListUseCase', () => {
  it('Should return method list with correct method and URL', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    axiosHttpClientInMemory.response = {data: postsListAPIMock()};

    const {sut} = makeSut({axiosHttpClientInMemory});
    await sut.list();

    expect(axiosHttpClientInMemory.method).toBe('get');
    expect(axiosHttpClientInMemory.url).toBe(
      'http://localhost:3333/posts'
    );
  });

  it('Should return method list with correct data', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    const postsListAPI = postsListAPIMock();
    axiosHttpClientInMemory.response = {data: postsListAPI};

    const {sut} = makeSut({axiosHttpClientInMemory});
    const data = await sut.list();

    expect(data[0]).toEqual({
      id: postsListAPI[0].id,
      title: postsListAPI[0].title_post,
      body: postsListAPI[0].body_post,
    } as PostModel);

    expect(data[1]).toEqual({
      id: postsListAPI[1].id,
      title: postsListAPI[1].title_post,
      body: postsListAPI[1].body_post,
    } as PostModel);
  });
});
