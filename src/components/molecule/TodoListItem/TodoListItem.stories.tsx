import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TodoListItem } from '.';
import { Props } from './Component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/TodoListItem',
  component: TodoListItem,
  argTypes: {
    text: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <TodoListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Book ticket to Palawan',
  handleUpdate: action('Update clicked'),
  handleDelete: action('Delete clicked'),
};
