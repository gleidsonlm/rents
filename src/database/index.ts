import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'db'; //MUST be the exat database name in docker-compose.yaml.
  createConnection({
    ...options,
  });
});