import axios from 'axios';

import {HttpResponse, IHttpClient} from '@infra/contracts';

export class AxiosHttpClient implements IHttpClient {
  async request(params: IHttpClient.Params): Promise<HttpResponse> {
    const {data} = await axios.request<HttpResponse>({
      method: params.method,
      url: params.url,
      data: params.body,
    });

    return {data};
  }
}
