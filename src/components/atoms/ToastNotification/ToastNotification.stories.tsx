import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ToastNotification } from '.';
import { Props, showToast } from './Component';

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
    <div>
      <button onClick={() => showToast('To do saved')}>Trigger</button>
      <ToastNotification {...args} />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  duration: 3000,
  position: 'bottom-center',
};
