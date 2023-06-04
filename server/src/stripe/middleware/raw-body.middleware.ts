import { Response } from 'express';
import { json } from 'body-parser';
import RequestWithRawBody from '../interfaces/request-with-raw-body';

function rawBodyMiddleware() {
  return json({
    verify: (
      request: RequestWithRawBody,
      response: Response,
      buffer: Buffer,
    ) => {
      if (
        request.url === '/api/v1/stripe/webhooks' &&
        Buffer.isBuffer(buffer)
      ) {
        request.rawBody = Buffer.from(buffer);
      }
      return true;
    },
  });
}

export default rawBodyMiddleware;
