import React, { useContext, useEffect, useMemo, useState } from "react";
import * as SQLite from "expo-sqlite";
import { uid } from "uid";
import { RegisterItem } from "../types";

interface DataBaseContextData {
  items: RegisterItem[];
  add(item: RegisterItem): void;
  update(item: RegisterItem): void;
  remove(item: RegisterItem): void;
}

export const DataBaseContext = React.createContext<DataBaseContextData>(
  {} as DataBaseContextData
);

export const DataBaseProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<RegisterItem[]>([]);
  function openDatabase() {
    const dbFn = SQLite.openDatabase("ucondo.db");
    return dbFn;
  }

  const db = openDatabase();

  useEffect(() => {
    db.transaction(
      (tx) => {
        // tx.executeSql("drop table items;");
        tx.executeSql(
          "create table if not exists items (id text primary key not null, code text, parentId text, name text, type text, acceptPosting text);"
        );
        tx.executeSql("select * from items", [], (_, { rows }) => {
          const result = rows as unknown as { _array: any[] };
          setItems(result._array);
        });
      },
      (e) => console.log(e)
    );
  }, []);

  const add = (item: RegisterItem) => {
    const id = uid(16);
    db.transaction(
      (tx) => {
        tx.executeSql(
          `insert into items (id, parentId, code, name, type, acceptPosting) values ('${id}', ${
            item.parentId ? `${item.parentId}` : null
          }, '${item.code}', '${item.name}', '${item.type}', '${
            item.acceptPosting
          }')`
        );
        tx.executeSql("select * from items", [], (_, { rows }) => {
          const result = rows as unknown as { _array: any[] };
          setItems(result._array);
        });
      },
      (e) => console.log(e)
    );
  };
  const update = (item: RegisterItem) => {
    const id = uid(16);
    db.transaction(
      (tx) => {
        tx.executeSql(
          `update items set 
            parentId = ${item.parentId ? `${item.parentId}` : null}, 
            code = "${item.code}", 
            name = "${item.name}", 
            type = "${item.type}", 
            acceptPosting = "${item.acceptPosting}" where id = "${item.id}"`
        );
        tx.executeSql("select * from items", [], (_, { rows }) => {
          const result = rows as unknown as { _array: any[] };
          setItems(result._array);
        });
      },
      (e) => console.log(e)
    );
  };
  const remove = (item: RegisterItem) => {
    const id = uid(16);
    db.transaction(
      (tx) => {
        tx.executeSql(`delete from items where id = "${item.id}"`);
        tx.executeSql("select * from items", [], (_, { rows }) => {
          const result = rows as unknown as { _array: any[] };
          setItems(result._array);
        });
      },
      (e) => console.log(e)
    );
  };

  return (
    <DataBaseContext.Provider
      value={{
        add,
        update,
        remove,
        items,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};

export default function useDataBaseContext(): DataBaseContextData {
  return useContext(DataBaseContext);
}
