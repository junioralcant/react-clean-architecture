import {
  HttpResponse,
  IHttpClient,
  ParamsHttp,
} from '../../../contracts/http-client';

export class AxiosHttpClientInMemory implements IHttpClient {
  method?: string;
  url?: string;

  response: HttpResponse = {data: ''};

  async request(params: ParamsHttp): Promise<HttpResponse> {
    this.method = params.method;
    this.url = params.url;
    return await Promise.resolve(this.response);
  }
}
