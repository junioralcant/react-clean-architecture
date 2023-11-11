import {describe, expect, it, vi} from 'vitest';
import {AxiosHttpClient} from './axios-http-client';
import axios from 'axios';
import {postsListMock} from '../../../data/mocks/post-list.mock';

function makeSut() {
  const sut = new AxiosHttpClient();
  return {sut};
}

describe('AxiosHttpClient', () => {
  it('Should return method body and URL correct', async () => {
    const axiosMocked = vi
      .spyOn(axios, 'request')
      .mockResolvedValueOnce({data: []});

    const {sut} = makeSut();

    await sut.request({
      method: 'get',
      url: 'http://localhost',
      body: {
        title: 'Esse é o meu titulo',
      },
    });

    expect(axiosMocked).toHaveBeenCalledWith({
      method: 'get',
      url: 'http://localhost',
      data: {
        title: 'Esse é o meu titulo',
      },
    });
  });

  it('Should return request with correct data', async () => {
    const dataMock = postsListMock();

    vi.spyOn(axios, 'request').mockResolvedValueOnce({
      data: dataMock,
    });

    const {sut} = makeSut();

    const response = await sut.request({
      method: 'get',
      url: 'http://localhost',
    });

    expect(response.data).toEqual(dataMock);
  });
});
