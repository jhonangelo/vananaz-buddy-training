import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import theme from '../../../constants/themes';

export type Props = {
  duration?: number;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
};

export const showToast = (message: string) => toast(message);

const Component = ({ duration, position }: Props): React.ReactElement => {
  return (
    <Toaster
      toastOptions={{
        duration: duration,
        style: {
          background: `${theme.colors.green3}`,
          color: `${theme.colors.gray9}`,
          minWidth: '120px',
          height: '32px',
          fontSize: '14px',
        },
        position: position,
      }}
    />
  );
};

export default Component;
