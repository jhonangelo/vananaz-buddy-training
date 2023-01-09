import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Input } from '.';
import { Props } from './Component';

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {
    inputType: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
    clearOption: {
      option: [true, false],
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Login',
  inputType: 'text',
  hasClearButton: false,
  onChange: action('input-text-changed'),
};
