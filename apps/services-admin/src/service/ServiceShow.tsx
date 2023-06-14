import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ServiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Demo" source="demo" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image 1" source="image_1" />
        <TextField label="Image 2" source="image_2" />
        <TextField label="Image 3" source="image_3" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
        <TextField label="Video" source="video" />
      </SimpleShowLayout>
    </Show>
  );
};
