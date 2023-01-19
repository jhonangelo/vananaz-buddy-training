import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { BackButton } from '.';
import { Props } from './Component';
import GlobalStyles from '../../../constants/themes/globalStyling';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/BackButton',
  component: BackButton,
  argTypes: {
    label: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  return (
    <>
      <GlobalStyles />
      <BackButton {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Search to do',
  backBtnClick: action('back-button-click'),
};
