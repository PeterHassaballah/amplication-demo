import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  products?: ProductCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username: string;
};
