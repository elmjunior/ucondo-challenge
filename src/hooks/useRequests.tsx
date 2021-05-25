import React, { useContext, useMemo } from "react";
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
}

export const RequestContext = React.createContext<RequestContextData>(
  {} as RequestContextData
);

export const RequestsProvider: React.FC = ({ children }) => {
  const { add, items, update, remove } = useDataBaseContext();

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

  const poastableItems = useMemo(
    () => items?.filter((item) => item?.acceptPosting === "no") ?? [],
    [items]
  );

  return (
    <RequestContext.Provider
      value={{
        list: items ?? [],
        poastableItems,
        createRegister,
        updateRegister,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default function useRequests(): RequestContextData {
  return useContext(RequestContext);
}
