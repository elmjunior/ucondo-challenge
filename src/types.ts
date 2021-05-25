import { TextInputProps } from "react-native";

export type RegisterType = "receipt" | "expense";
export type AcceptPosting = "yes" | "no";

export interface RegisterItem {
  id: string;
  parent?: RegisterItem;
  parentId?: number;
  code: string;
  name: string;
  type: RegisterType;
  acceptPosting: AcceptPosting;
}

type RenderTypes = "checkboxes" | "input" | "dropdown";
export interface InputField extends TextInputProps {
  renderType?: RenderTypes;
  name: string;
  options?: Record<string, any>[];
  customComponent?: ({ options }: any) => JSX.Element;
  label?: string;
  controller?: { key: string; name: string };
  md?: 100 | 50 | 33 | 25 | 75 | 66;
  customChange?(value: any): void;
  isRequired?: boolean;
  defaultValue?: any;
  hidden?: boolean;
}
