import { NestResponse } from './nest-response';

export class NestResponseBuilder {
  private response: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  };

  public setStatus(status: number) {
    this.response.status = status;
    return this;
  }

  public setHeaders(headers: Object) {
    this.response.headers = headers;
    return this;
  }

  public setBody(body: Object) {
    this.response.body = body;
    return this;
  }

  public build() {
    return new NestResponse(this.response);
  }
}
