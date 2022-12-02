import React, { FC } from 'react';
import Styles from './index.module.scss';
import ModalBackground from '../ModalBackground';

export interface ModalProps {
  children: React.ReactElement
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className={Styles.modal}>
      <ModalBackground style={"light"} />
      <div className={Styles.modal__aux}>
        <div className={Styles.modal__content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
