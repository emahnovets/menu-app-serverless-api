import type { Handler } from 'aws-lambda';

export const healthCheck: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'ok',
    }),
  };
};
