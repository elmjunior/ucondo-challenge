import { RegisterItem } from "../types";
import useDataBaseContext from "./useDatabaseContext";

export default function useCodes() {
  const { getChildren } = useDataBaseContext();
  const getCode = async (item: RegisterItem) => {
    const prefix = item.code;
    const children = await getChildren(item);
    if (!children?.length) {
      return `${prefix}.1`;
    }

    const lastChildrenCode = children.reduce((acc, item) => {
      const lastCode = item.code.split(".");

      return `${acc}.${Number(lastCode?.[lastCode.length - 1]) + 1}`;
    }, prefix);

    return lastChildrenCode;
  };
  return { getCode };
}
