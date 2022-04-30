import { Product } from "../product/Product";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  products?: Array<Product>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
