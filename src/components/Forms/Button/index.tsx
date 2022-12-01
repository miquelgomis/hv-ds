import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface ButtonProps {
  label: string;
  style: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ label, style }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </button>
  );
};

export default Button;
