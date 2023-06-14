import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Difficulty" source="difficulty" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Long description" source="longDescription" />
        <TextField label="Name" source="name" />
        <TextField label="Source" source="source" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
