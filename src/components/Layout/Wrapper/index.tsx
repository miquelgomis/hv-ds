import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface WrapperProps {
  children: React.ReactElement;
  width?: number;
}

const Wrapper: FC<WrapperProps> = ({ children, width = 1200 }) => {
  return (
    <div className={Styles.wrapper} style={{ maxWidth: width }}>
      {children}
    </div>
  );
};

export default Wrapper;
