import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  estimation: string | null;
  id: string;
  project: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
