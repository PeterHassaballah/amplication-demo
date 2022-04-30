import { Order } from "../order/Order";
import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
  user?: User | null;
};
