import { useQuery, gql, useLazyQuery, useApolloClient } from "@apollo/client";
import React, { useContext, useEffect, useMemo } from "react";
import { RegisterItem } from "../types";
import useDataBaseContext from "./useDatabaseContext";

interface RequestContextData {
  list: RegisterItem[];
  poastableItems: RegisterItem[];
  createRegister(register: RegisterItem): void;
  updateRegister(register: RegisterItem): void;
  removeRegister(register: RegisterItem): void;

  isLoading: boolean;
}

const LIST = gql`
  query registerItems {
    registerItems {
      id
      name
      code
      type
      acceptPosting
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
      acceptPosting
    }
  }
`;

export const RequestContext = React.createContext<RequestContextData>(
  {} as RequestContextData
);

export const RequestsProvider: React.FC = ({ children }) => {
  const { add, items, update, remove } = useDataBaseContext();
  const { data, loading, client } = useQuery<{ registerItems: RegisterItem[] }>(
    LIST,
    {
      fetchPolicy: "cache-only",
    }
  );

  useEffect(() => {
    client.cache.writeQuery({
      query: LIST,
      data: {
        registerItems: items,
      },
    });
  }, [items]);

  const createRegister = (registerItem: RegisterItem) => add(registerItem);
  const updateRegister = (registerItem: RegisterItem) => update(registerItem);

  const removeRegister = (registerItem: RegisterItem) => remove(registerItem);

  const poastableItems = useMemo(
    () => data?.registerItems?.filter((item) => item?.acceptPosting === "yes"),
    [data?.registerItems ?? []]
  );

  return (
    <RequestContext.Provider
      value={{
        list: data?.registerItems ?? [],
        poastableItems,
        createRegister,
        removeRegister,
        updateRegister,
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
