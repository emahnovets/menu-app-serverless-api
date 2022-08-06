import type { Handler } from 'aws-lambda';
import packageJson from '../../package.json';

export const healthCheck: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'ok',
      version: packageJson.version,
    }),
  };
};
