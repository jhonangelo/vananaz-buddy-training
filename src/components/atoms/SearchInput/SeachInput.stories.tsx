import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { SearchInput } from '.';
import { Props } from './Component';

export default {
  title: 'atoms / SeachInput',
  component: SearchInput,
} as Meta;

const Template: Story<Props> = (args: Props) => <SearchInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: action('navigate-to-seach-input-page'),
};
