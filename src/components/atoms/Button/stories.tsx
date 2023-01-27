import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Button } from '.';
import { Props } from './Component';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args: Props) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  label: 'Login',
  onClick: action('primary-button-click'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  label: 'Select',
  onClick: action('seondary-button-click'),
};

export const Warning = Template.bind({});
Warning.args = {
  buttonType: 'modalButton',
  label: 'No',
  onClick: action('warning-button-click'),
};
