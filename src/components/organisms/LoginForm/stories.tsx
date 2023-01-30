import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LoginForm } from '.';
import { Props } from './Component';
import GlobalStyles from '../../../constants/themes/globalStyling';
import { action } from '@storybook/addon-actions';

export default {
  title: 'organisms/LoginForm',
  component: LoginForm,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  return (
    <>
      <GlobalStyles />
      <LoginForm {...args} />
    </>
  );
};
export const Default = Template.bind({});
Default.args = {
  submitLogin: action('form-submitted'),
};
