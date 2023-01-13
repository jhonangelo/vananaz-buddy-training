import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SelectModal } from '.';
import { Props } from './Component';
import { Button } from '../../atoms/Button';

export default {
  title: 'molecules/SelectModal',
  component: SelectModal,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        buttonType='primary'
        label='Test Modal'
      />
      <SelectModal
        isOpen={isOpen}
        selectAllHandler={closeModal}
        completeSelectedHandler={closeModal}
        deleteSelectedHandler={closeModal}
        closeModal={closeModal}
      />
    </>
  );
};
export const Primary = Template.bind({});
Primary.args = {
  isOpen: false,
};
