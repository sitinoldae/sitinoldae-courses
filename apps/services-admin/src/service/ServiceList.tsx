import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ServiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Services"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
