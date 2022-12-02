import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface ButtonProps {
  label: string;
  color?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ label, color = "primary" }) => {
  return (
    <button className={`${Styles.button} ${color ? "bg-" + color : ''} text-white font-bold py-2 px-4 rounded`}>
      {label}
    </button>
  );
};

export default Button;
