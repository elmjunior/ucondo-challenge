import { useQuery, gql } from "@apollo/client";
import React, { useContext, useEffect, useMemo } from "react";
import { ErrorMessage, RegisterItem } from "../types";
import useDataBaseContext from "./useDatabaseContext";

interface PutReturn {
  item?: RegisterItem;
  error?: ErrorMessage;
}
interface RequestContextData {
  list: RegisterItem[];
  poastableItems: RegisterItem[];
  createRegister(register: RegisterItem): Promise<PutReturn>;
  updateRegister(register: RegisterItem): Promise<PutReturn>;
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

  const createRegister = async (
    registerItem: RegisterItem
  ): Promise<PutReturn> => {
    try {
      const item = await add(registerItem);
      return { item };
    } catch (error) {
      const message = !!error.toString().match(/UNIQUE/i)
        ? "Este código já foi utilizado"
        : "algo errado aconteceu";

      return { error: { message } };
    }
  };

  const updateRegister = async (
    registerItem: RegisterItem
  ): Promise<PutReturn> => {
    try {
      const item = await update(registerItem);

      return { item };
    } catch (error) {
      const message = !!error.toString().match(/UNIQUE/i)
        ? "Este código já foi utilizado"
        : "algo errado aconteceu";

      return { error: { message } };
    }
  };

  const removeRegister = (registerItem: RegisterItem) => remove(registerItem);

  const poastableItems = useMemo(
    () => data?.registerItems?.filter((item) => item?.acceptPosting === "no"),
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
