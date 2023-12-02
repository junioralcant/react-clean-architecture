import {
  HttpResponse,
  IHttpClient,
  ParamsHttp,
} from '@infra/contracts';

export class AxiosHttpClientInMemory implements IHttpClient {
  method?: string;
  url?: string;
  data?: any;

  response: HttpResponse = {data: ''};

  async request(params: ParamsHttp): Promise<HttpResponse> {
    this.method = params.method;
    this.url = params.url;
    this.data = params.body;
    return await Promise.resolve(this.response);
  }
}
