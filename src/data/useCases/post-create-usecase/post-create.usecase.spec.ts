import {describe, expect, it} from 'vitest';

import {AxiosHttpClientInMemory} from '../../../infra/implementations/axios-http-client/in-memory/axios-http-client.in.memory';
import {postsListAPIMock} from '../../mocks/post-list.mock';
import {PostCreateUseCase} from './post-create.usecase';

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
    axiosHttpClientInMemory.response = {data: postsListAPIMock()};

    const {sut} = makeSut({axiosHttpClientInMemory});
    await sut.create({title: 'meu titulo', body: 'meu body'});

    expect(axiosHttpClientInMemory.method).toBe('post');
    expect(axiosHttpClientInMemory.url).toBe(
      'http://localhost:3333/posts'
    );
  });
});
