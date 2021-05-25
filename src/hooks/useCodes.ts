import { RegisterItem } from "../types";
import useDataBaseContext from "./useDatabaseContext";

export default function useCodes() {
  const { getLastChild } = useDataBaseContext();
  const canIncrement = (num: string | number) => Number(num) < 999;

  const getCode = async (item: RegisterItem) => {
    const prefix = item.code;
    const children = await getLastChild(item);
    if (!children?.length) {
      return `${prefix}.1`;
    }

    const code = children[0].code.split(".");

    if (canIncrement(code[code.length - 1])) {
      return code
        .map((x, i) => (i === code.length - 1 ? Number(x) + 1 : x))
        .join(".");
    }

    for (let i = code.length - 1; i >= 0; i -= 1) {
      let previous;
      if (i !== 0) previous = code[i - 1];
      if (canIncrement(previous)) {
        const filtered = code.filter((x, y) => y < i);
        filtered[filtered.length - 1] = `${
          Number(filtered[filtered.length - 1]) + 1
        }`;

        return filtered.join(".");
      }
    }
  };
  return { getCode };
}
