import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SelectList } from '.';
import { Props } from './Component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'organisms/SelectList',
  component: SelectList,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SelectList {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      id: 1,
      todo: 'Find a hotel recommendation in Palawan',
      completed: false,
    },
    { id: 2, todo: 'Make a dentist appointment', completed: false },
    { id: 3, todo: 'Buy feed for fish and dog', completed: false },
    { id: 4, todo: 'Cut the grass', completed: false },
  ],
  completeSelected: action('complete-selected'),
  deleteSelected: action('delete-selected'),
};
