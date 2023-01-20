import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AddTodoTemplate } from '.';
import { Props } from './Component';
import GlobalStyles from '../../../constants/themes/globalStyling';
import { action } from '@storybook/addon-actions';

export default {
  title: 'templates/AddTodo',
  component: AddTodoTemplate,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  return (
    <>
      <GlobalStyles />
      <AddTodoTemplate {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  formSubmit: action('add-todo-input'),
};
