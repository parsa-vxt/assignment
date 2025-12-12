import ky from 'ky';

import { env } from '../env';

export const httpClient = ky.create({
   prefixUrl: env.VITE_API_URL,
});
