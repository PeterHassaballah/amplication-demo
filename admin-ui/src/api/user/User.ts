import { Product } from "../product/Product";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  products?: Array<Product>;
  roles: Array<string>;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
