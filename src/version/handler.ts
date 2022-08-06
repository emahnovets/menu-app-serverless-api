import type { Handler } from 'aws-lambda';
import packageJson from '../../package.json';

export const version: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      version: packageJson.version,
    }),
  };
};
