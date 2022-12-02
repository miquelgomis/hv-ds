import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface ModalBackgroundProps {
  style: "light" | "dark"
}

const ModalBackground: FC<ModalBackgroundProps> = ({ style = "light" }) => {
  return (
    <div className={`${Styles.modalbackground} ${Styles[style]}`} />
  );
};

export default ModalBackground;
