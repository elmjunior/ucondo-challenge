import { ApolloClient, from } from '@apollo/client';
import { auth, http, error } from './links';
import cache from './cache';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function createClient() {
  const link = from([error, auth(), http()]);

  const client = new ApolloClient({
    link,
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });

  return client;
}
