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

export const showToastSuccess = (message: string) => toast.success(message);

export const showToastError = (message: string) => toast.error(message);

const Component = ({ duration, position }: Props): React.ReactElement => {
  return (
    <Toaster
      toastOptions={{
        duration: duration,
        success: {
          style: {
            background: `${theme.colors.green3}`,
            color: `${theme.colors.gray9}`,
          },
        },

        error: {
          style: {
            background: `${theme.colors.red1}`,
            color: `${theme.colors.gray9}`,
          },
        },
        style: {
          minWidth: '120px',
          height: '32px',
          fontSize: '14px',
          borderRadius: '4px',
        },
        position: position,
        icon: null,
      }}
    />
  );
};

export default Component;
