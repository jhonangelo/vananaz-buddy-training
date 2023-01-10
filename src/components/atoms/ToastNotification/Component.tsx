import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

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
          background: '#6FCF97',
          color: '#262626',
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
