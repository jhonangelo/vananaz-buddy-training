import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextLink } from '.';
import { Props } from './Component';

export default {
  title: 'atoms/TextLink',
  component: TextLink,
  argTypes: {
    text: { control: 'text' },
    linkTo: { control: 'text' },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <TextLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Add your first to do',
  linkTo: 'abc.com',
};
