import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Difficulty" source="difficulty" />
        <TextInput label="Image" source="image" />
        <TextInput
          label="Long description"
          multiline
          source="longDescription"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="Source" source="source" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
