import { fn } from '@storybook/test';
import Table from '../components/Table/Table';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
];

const data = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'David', age: 40 },
  { id: 5, name: 'Eve', age: 45 },
];

export const BasicTable = {
  args: {
    columns,
    data,
  },
};

export const SortableTable = {
  args: {
    columns,
    data,
    sortable: true,
  },
};

export const PaginatedTable = {
  args: {
    columns,
    data: [...data, { id: 6, name: 'Frank', age: 50 }, { id: 7, name: 'Grace', age: 55 }],
    paginated: true,
    rowsPerPage: 3,
  },
};

export const EditableTable = {
  args: {
    columns,
    data,
    editable: true,
  },
};
