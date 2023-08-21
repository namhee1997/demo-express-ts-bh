import { ResponseOutputSuccessType, ResponseOutputFailedType, TokenType } from './schema';

export class ResponseOutputSuccess {
  data;
  status;
  constructor({ data, status = 200 }: ResponseOutputSuccessType) {
    this.data = data;
    this.status = status;
  }
}

export class ResponseOutputFailed {
  data;
  status;
  message;
  constructor({ data, status = 404, message }: ResponseOutputFailedType) {
    this.data = data;
    this.status = status;
    this.message = message;
  }
}

export class Token {
  access_token;
  token_type;
  verify_token;
  constructor({ access_token, token_type = 'bearer', verify_token }: TokenType) {
    this.access_token = access_token;
    this.token_type = token_type;
    this.verify_token = verify_token;
  }
}
