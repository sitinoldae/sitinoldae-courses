import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  difficulty?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  longDescription?: SortOrder;
  name?: SortOrder;
  source?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
