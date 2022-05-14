import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  products?: ProductUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  tasks?: TaskUpdateManyWithoutUsersInput;
  username?: string;
};
