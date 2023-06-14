import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ServiceWhereInput = {
  demo?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image_1?: StringNullableFilter;
  image_2?: StringNullableFilter;
  image_3?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  url?: StringNullableFilter;
  video?: StringNullableFilter;
};
