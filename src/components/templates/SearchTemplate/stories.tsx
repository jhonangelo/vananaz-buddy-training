import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchTemplate } from '.';
import { Props } from './Component';
import GlobalStyles from '../../../constants/themes/globalStyling';
import { action } from '@storybook/addon-actions';

export default {
  title: 'templates/Search',
  component: SearchTemplate,
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
      <SearchTemplate {...args} />
    </>
  );
};

export const withData = Template.bind({});
withData.args = {
  data: [
    { id: 1, text: 'Get parcel from LBC', isDone: false },
    { id: 2, text: 'Book an appointment', isDone: false },
    { id: 3, text: 'Walk the dog', isDone: false },
  ],
  deleteSelected: action('selected-todo-deleted'),
  completeSelected: action('selected-todo-completed'),
};

export const empty = Template.bind({});
empty.args = {
  data: [],
  deleteSelected: action('selected-todo-deleted'),
  completeSelected: action('selected-todo-completed'),
};
