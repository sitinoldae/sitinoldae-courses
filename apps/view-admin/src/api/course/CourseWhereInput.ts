import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  difficulty?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  longDescription?: StringNullableFilter;
  name?: StringNullableFilter;
  source?: StringNullableFilter;
  url?: StringNullableFilter;
};
