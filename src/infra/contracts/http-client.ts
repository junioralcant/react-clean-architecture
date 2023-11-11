export type HttpResponse<TData = any> = {
  data: TData;
};

export type HttpMethod = 'get' | 'put' | 'delete' | 'post';

export type ParamsHttp = {
  method: HttpMethod;
  url: string;
  body?: any;
};

export interface IHttpClient<TData = any> {
  request(params: IHttpClient.Params): Promise<HttpResponse<TData>>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IHttpClient {
  export type Params = ParamsHttp;
}
