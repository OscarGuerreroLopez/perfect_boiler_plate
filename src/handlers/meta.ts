import { Handler, Response, Request } from "express";

import { version as __version } from "../../package.json";

export const getMeta: Handler = (_request: Request, response: Response) => {
  return response.send({
    env: process.env.NODE_ENV || "development",
    version: __version,
  });
};