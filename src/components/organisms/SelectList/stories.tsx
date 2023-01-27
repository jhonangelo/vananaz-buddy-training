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
    { id: 1, text: 'Find a hotel recommendation in Palawan', isDone: false },
    { id: 2, text: 'Make a dentist appointment', isDone: false },
    { id: 3, text: 'Buy feed for fish and dog', isDone: false },
    { id: 4, text: 'Cut the grass', isDone: false },
  ],
  completeSelected: action('complete-selected'),
  deleteSelected: action('delete-selected'),
};
