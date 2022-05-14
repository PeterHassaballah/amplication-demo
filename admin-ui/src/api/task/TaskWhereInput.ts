import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  estimation?: StringNullableFilter;
  id?: StringFilter;
  project?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
