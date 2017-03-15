import * as HTTP from 'http';

/**
 * HTTP status error.
 */
export class HTTPError extends Error {
  name = 'HTTPError';
  status: number;
  constructor(status: number) {
    super(`${status}`);
    this.status = status;
    if (HTTP.STATUS_CODES[status]) {
      this.message = HTTP.STATUS_CODES[status];
    }
  }
}
