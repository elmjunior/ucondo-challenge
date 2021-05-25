import { useQuery, gql, useLazyQuery, useApolloClient } from "@apollo/client";
import React, { useContext, useEffect, useMemo } from "react";

export type RegisterType = "receipt" | "expense";

export interface RegisterItem {
  id: number;
  parent?: RegisterItem;
  code: string;
  name: string;
  type: RegisterType;
  acceptPosting: boolean;
}

interface RequestContextData {
  list: RegisterItem[];
  poastableItems: RegisterItem[];
  createRegister(register: RegisterItem): void;
  removeRegister(register: RegisterItem): void;

  isLoading: boolean;
}

// export const registerItemFragment = gql`
//   fragment registerItem_Part on RegisterItem {
//     id
//     name
//     code
//     type
//   }
// `;

const LIST = gql`
  query registerItems {
    registerItems {
      id
      name
      code
      type
    }
  }
`;

const GET = gql`
  query registerItems($id: Int!) {
    registerItems(id: $id) {
      id
      name
      code
      type
    }
  }
`;

export const RequestContext = React.createContext<RequestContextData>(
  {} as RequestContextData
);

export const RequestsProvider: React.FC = ({ children }) => {
  //   const [getItems, { data, loading, client }] = useLazyQuery<{
  //     getItems: RegisterItem[];
  //   }>(LIST, {
  //     fetchPolicy: "cache-only",
  //   });
  const { data, loading, client } = useQuery<{ registerItems: RegisterItem[] }>(
    LIST,
    {
      fetchPolicy: "cache-only",
    }
  );
  console.log(data);

  const createRegister = (registerItem: RegisterItem) => {
    client.cache.writeQuery({
      query: LIST,
      data: {
        registerItems: [
          ...(data?.registerItems ?? []),
          {
            __typename: "RegisterItem",
            id: 1,
            ...registerItem,
          },
        ],
      },
    });
  };

  const removeRegister = (registerItem: RegisterItem) =>
    console.log(registerItem);

  const poastableItems = useMemo(
    () => data?.registerItems.filter((item) => item.acceptPosting),
    [data?.registerItems ?? []]
  );

  return (
    <RequestContext.Provider
      value={{
        list: data?.registerItems ?? [],
        poastableItems,
        createRegister,
        removeRegister,
        isLoading: loading,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default function useRequests(): RequestContextData {
  return useContext(RequestContext);
}
