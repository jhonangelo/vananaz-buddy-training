import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TodoList } from '.';
import { Props } from './Component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'organisms/TodoList',
  component: TodoList,
} as Meta;

const Template: Story<Props> = (args: Props) => {
  return (
    <TodoList
      {...args}
      handleDelete={args.handleDelete}
      handleUpdate={args.handleUpdate}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  data: [
    { id: 1, todo: 'Get the parcel from LBC', completed: false },
    { id: 2, todo: 'Get my mac fixed', completed: false },
    { id: 3, todo: 'Book ticket to Palawan', completed: false },
    {
      id: 4,
      todo: 'Find hotel recommendation in Palawan',
      completed: false,
    },
    { id: 5, todo: 'Buy a graduation gift for Sarah', completed: false },
  ],
  handleDelete: action('To do item deleted'),
  handleUpdate: action('To do item updated'),
  itemClick: action('Todo item clicked'),
};
