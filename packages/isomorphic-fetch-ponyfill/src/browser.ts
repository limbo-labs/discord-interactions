/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { BodyInit, HeadersInit, ResponseInit } from "whatwg-fetch";
import {
  fetch as fetchPolyfill,
  Headers as HeadersPolyfill,
  Request as RequestPolyfill,
  Response as ResponsePolyfill
} from "whatwg-fetch";

let fetch, Headers, Request, Response;

if (typeof global === "object") {
  fetch = global.fetch;
  Headers = global.Headers;
  Request = global.Request;
  Response = global.Response;
} else if (typeof self === "object") {
  fetch = self.fetch;
  Headers = self.Headers;
  Request = self.Request;
  Response = self.Response;
} else {
  fetch = fetchPolyfill;
  Headers = HeadersPolyfill;
  Request = RequestPolyfill;
  Response = ResponsePolyfill;
}

export { fetch, Headers, Request, Response };
export type { ResponseInit, HeadersInit, BodyInit };
export default fetch;
