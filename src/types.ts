export type RegisterType = "receipt" | "expense";
export type AcceptPosting = "yes" | "no";

export interface RegisterItem {
  id: number;
  parent?: RegisterItem;
  parentId?: number;
  code: string;
  name: string;
  type: RegisterType;
  acceptPosting: AcceptPosting;
}
