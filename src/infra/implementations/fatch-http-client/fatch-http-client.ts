import {HttpResponse, IHttpClient} from '@infra/contracts';

export class FetchHttpClient implements IHttpClient {
  async request(params: IHttpClient.Params): Promise<HttpResponse> {
    const response = await fetch(params.url, {
      method: params.method,
      body: JSON.stringify(params.body),
    });

    const data = (await response.json()) as HttpResponse;

    return {data};
  }
}
