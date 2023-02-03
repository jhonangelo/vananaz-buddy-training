import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { ToastNotification } from '.';
import { Props } from './Component';
import { toast } from 'react-hot-toast';

const Button = styled.button`
  background: #6fcf97;
  width: 120px;
  height: 32px;
  font-size: 14px;
  color: '#262626';
  border: none;
  border-radius: 4px;
`;

export default {
  title: 'atoms/ToastNotification',
  component: ToastNotification,
  argTypes: {
    position: {
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  return (
    <>
      <Button onClick={() => toast.success('To do saved')}>Open toast</Button>
      <Button onClick={() => toast.success('Error')}>Open toast</Button>
      <ToastNotification {...args} />
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  duration: 3000,
  position: 'bottom-center',
};
