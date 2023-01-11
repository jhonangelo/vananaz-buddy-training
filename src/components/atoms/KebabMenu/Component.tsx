import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { ReactComponent as Kebab } from './Icons/kebab.svg';

const PopupMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 115px;
  padding: 12px;
  gap: 14px;
  margin-right: 8px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  &:focus {
    outline: red;
  }
`;

const KebabButton = styled(Kebab)<Props>`
  cursor: pointer;
  circle {
    ${(props) => (props.isActive ? `fill: #2F80ED;` : `fill:#C4C4C4`)}
  }
`;

export type Props = { isActive?: boolean };

const Component = (args: Props): React.ReactElement => {
  const [isActive, setActive] = useState(false);
  return (
    <Popup
      trigger={<KebabButton isActive={isActive} />}
      position='left top'
      on='click'
      arrow={false}
      closeOnDocumentClick
      onOpen={() => setActive(true)}
      onClose={() => setActive(false)}
    >
      <PopupMenu>
        <Button>Update</Button>
        <Button>Delete</Button>
      </PopupMenu>
    </Popup>
  );
};

export default Component;
