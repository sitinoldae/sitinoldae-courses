import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Demo" source="demo" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image 1" source="image_1" />
        <TextInput label="Image 2" source="image_2" />
        <TextInput label="Image 3" source="image_3" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Url" source="url" />
        <TextInput label="Video" source="video" />
      </SimpleForm>
    </Create>
  );
};
