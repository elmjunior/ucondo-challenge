import { InMemoryCache } from '@apollo/client';
import config from './config';

export default new InMemoryCache(config);
