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
    { id: 1, text: 'Get the parcel from LBC', isDone: false },
    { id: 2, text: 'Get my mac fixed', isDone: false },
    { id: 3, text: 'Book ticket to Palawan', isDone: false },
    { id: 4, text: 'Find hotel recommendation in Palawan', isDone: false },
    { id: 5, text: 'Buy a graduation gift for Sarah', isDone: false },
  ],
  handleDelete: action('To do item deleted'),
  handleUpdate: action('To do item updated'),
  itemClick: action('Todo item clicked'),
};
