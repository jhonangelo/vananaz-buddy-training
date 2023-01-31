import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TodoListTemplate } from '.';
import { Props } from './Component';
import GlobalStyles from '../../../constants/themes/globalStyling';
import { action } from '@storybook/addon-actions';

export default {
  title: 'templates/TodoList',
  component: TodoListTemplate,
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
      <TodoListTemplate {...args} />
    </>
  );
};

export const withData = Template.bind({});
withData.args = {
  data: [{ id: 1, todo: 'Get parcel from FBI', completed: false }],
  homeBtnClick: action('navigate-home'),
  SearchInputClick: action('search-list-navigate'),
  SearchBtnClick: action('search-button-navigate'),
  itemClick: action('todo-item-click'),
  handleUpdate: action('update-click'),
  handleDelete: action('delete-click'),
  AddTodoBtnClick: action('new-todo-button-click'),
};

export const empty = Template.bind({});
empty.args = {
  data: [],
};
