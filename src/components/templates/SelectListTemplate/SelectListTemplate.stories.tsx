import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SelectListTemplate } from '.';
import { Props } from './Component';
import GlobalStyles from '../../../constants/themes/globalStyling';
import { action } from '@storybook/addon-actions';

export default {
  title: 'templates/SelectList',
  component: SelectListTemplate,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },

  argTypes: {
    data: {
      control: {
        type: 'array',
        of: [
          {
            type: 'object',
            properties: {
              id: {
                type: 'number',
              },
              text: {
                type: 'string',
              },
              isDone: {
                type: 'boolean',
              },
            },
          },
        ],
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  return (
    <>
      <GlobalStyles />
      <SelectListTemplate {...args} />
    </>
  );
};

export const withData = Template.bind({});
withData.args = {
  data: [{ id: 1, text: 'Get parcel from LBC', isDone: false }],
  backBtnClick: action('go-back'),
  deleteSelected: action('selected-todo-deleted'),
  completeSelected: action('selected-todo-completed'),
};

export const empty = Template.bind({});
empty.args = {
  data: [],
  backBtnClick: action('go-back'),
  deleteSelected: action('selected-todo-deleted'),
  completeSelected: action('selected-todo-completed'),
};
