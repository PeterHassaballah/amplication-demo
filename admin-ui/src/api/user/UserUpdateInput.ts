import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  products?: ProductUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
