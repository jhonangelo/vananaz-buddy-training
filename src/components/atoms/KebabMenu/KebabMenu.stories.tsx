import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { KebabMenu } from '.';
import { Props } from './Component';

export default {
  title: 'atoms/KebabMenu',
  component: KebabMenu,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<Props> = ({ ...args }: Props) => <KebabMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
