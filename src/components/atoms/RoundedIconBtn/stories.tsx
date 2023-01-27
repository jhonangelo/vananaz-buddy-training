import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { RoundedIconBtn } from '.';
import { Props } from './Component';

export default {
  title: 'atoms/RoundedIconBtn',
  component: RoundedIconBtn,
} as Meta;

const Template: Story<Props> = (args: Props) => <RoundedIconBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: action('rounded-icon-button-click'),
};
