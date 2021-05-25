import { setContext } from "@apollo/client/link/context";
import { ApolloLink } from "@apollo/client";

const apolloLink = (): ApolloLink =>
  setContext(async (_, { headers }) => {
    return {
      headers,
    };
  });

export default apolloLink;
