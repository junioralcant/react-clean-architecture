import {describe, expect, it} from 'vitest';

import {PostModel} from '@domain/models';
import {AxiosHttpClientInMemory} from '@infra/implementations';

import {PostCreateUseCase} from '..';

type SutParam = {
  axiosHttpClientInMemory?: AxiosHttpClientInMemory;
};

function makeSut({
  axiosHttpClientInMemory = new AxiosHttpClientInMemory(),
}: SutParam = {}) {
  const sut = new PostCreateUseCase(axiosHttpClientInMemory);
  return {sut, axiosHttpClientInMemory};
}

describe('PostCreateUseCase', () => {
  it('Should return method list with correct method and URL', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();

    const {sut} = makeSut({axiosHttpClientInMemory});
    await sut.create({title: 'meu titulo', body: 'meu body'});

    expect(axiosHttpClientInMemory.method).toBe('post');
    expect(axiosHttpClientInMemory.url).toBe(
      'http://localhost:3333/posts'
    );
    expect(axiosHttpClientInMemory.data).toEqual({
      title_post: 'meu titulo',
      body_post: 'meu body',
    });
  });

  it('Should return method create with correct data', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    const postsListAPI = {
      id: '04',
      title_post: 'Meu titulo',
      body_post: 'Meu body',
    };

    axiosHttpClientInMemory.response = {
      data: postsListAPI,
    };

    const {sut} = makeSut({axiosHttpClientInMemory});
    const data = await sut.create({
      title: 'Meu titulo',
      body: 'Meu body',
    });

    expect(data).toEqual({
      id: postsListAPI.id,
      title: postsListAPI.title_post,
      body: postsListAPI.body_post,
    } as PostModel);
  });
});
