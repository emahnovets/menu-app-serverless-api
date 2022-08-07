import type { Handler } from 'aws-lambda';

export const version: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      version: process.env.APP_VERSION,
    }),
  };
};
