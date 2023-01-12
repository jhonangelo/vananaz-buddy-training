import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CheckboxItem } from '.';
import { Props } from './Component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/CheckboxItem',
  component: CheckboxItem,
  argTypes: {
    text: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CheckboxItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Sample to do',
  onCheck: action('checked'),
};
