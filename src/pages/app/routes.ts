import List from "./List";
import Put from "./Put";

export default Object.freeze<{
  component: React.FC;
  name: string;
  title: string;
  hideHeader?: boolean;
}>([
  { component: List, name: "list", title: "Plano de contas" },
  { component: Put, name: "put", title: "Registro" },
]);
