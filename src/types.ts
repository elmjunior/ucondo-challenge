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
