import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { Modal } from '.';
import { Props } from './Component';

const Button = styled.button`
  background: rgba(47, 128, 237, 0.15);
  width: 120px;
  height: 32px;
  font-size: 14px;
  color: #2f80ed;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default {
  title: 'atoms/Modal',
  component: Modal,
  argTypes: {
    header: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen((prevState) => !prevState)}>
        Test Modal
      </Button>
      <Modal isOpen={isOpen} {...args} />
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  header: 'Delete to do?',
};
