import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DeleteModal } from '.';
import { Props } from './Component';
import { Button } from '../../atoms/Button';

export default {
  title: 'molecules/DeleteModal',
  component: DeleteModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        buttonType='primary'
        label='Test Modal'
      />
      <DeleteModal
        isOpen={isOpen}
        noBtnClick={() => setIsOpen(false)}
        yesBtnClick={() => alert('Yes button clicked!')}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  isOpen: false,
  noBtnClick: () => {},
  yesBtnClick: () => {},
};
