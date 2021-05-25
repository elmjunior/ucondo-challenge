import { InMemoryCacheConfig } from "@apollo/client";
export default {
  typePolicies: {
    Query: {
      fields: {
        active: {
          merge: (_, incoming) => incoming,
        },
        fields: {
          merge: (_, incoming) => incoming,
        },
      },
    },
  },
} as InMemoryCacheConfig;
