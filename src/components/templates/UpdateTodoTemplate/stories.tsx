import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { UpdateTodoTemplate } from '.';
import { Props } from './Component';
import GlobalStyles from '../../../constants/themes/globalStyling';
import { action } from '@storybook/addon-actions';

export default {
  title: 'templates/UpdateTodo',
  component: UpdateTodoTemplate,
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
      <UpdateTodoTemplate {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  currentTodo: { id: 0, todo: 'Get parcel from LBC', completed: false },
  updateSubmit: action('updated-value'),
};
