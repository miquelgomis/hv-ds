import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface WrapperProps {
  children: React.ReactElement;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className={Styles.wrapper}>
      {children}
    </div>
  );
};

export default Wrapper;
