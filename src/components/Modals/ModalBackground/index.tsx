import React, { FC } from 'react';
import { styles } from '../../../interfaces/commons';
import Styles from './index.module.scss';

export interface ModalBackgroundProps {
  color: styles
}

const ModalBackground: FC<ModalBackgroundProps> = ({ color = "light" }) => {
  return (
    <div className={`${Styles.modalbackground} ${Styles[color]}`} />
  );
};

export default ModalBackground;
