import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TodoItem } from '.';
import { Props } from './Component';

export default {
  title: 'atoms/TodoItem',
  component: TodoItem,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Book ticket to Palawan' };

export const Updating = Template.bind({});
Updating.args = { text: 'Buy a graduation gift for Sarah', isUpdating: true };

export const ToBeDeleted = Template.bind({});
ToBeDeleted.args = { text: 'Make a dentist appointment', isToBeDeleted: true };

export const Deleted = Template.bind({});
Deleted.args = { text: 'Water the plants', isDone: true };
