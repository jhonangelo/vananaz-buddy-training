import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ToastNotification } from '.';
import { Props } from './Component';

export default {
  title: 'atoms/ToastNotification',
  component: ToastNotification,
  argTypes: {
    message: { control: 'text' },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ToastNotification {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: 'To do saved',
};
