import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  estimation?: string | null;
  project?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
