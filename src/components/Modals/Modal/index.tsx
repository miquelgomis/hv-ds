import React, { FC } from 'react';
import Styles from './index.module.scss';
import ModalBackground from '../ModalBackground';
import { styles } from '../../../interfaces/commons';

export interface ModalProps {
  children: React.ReactElement;
  color?: styles;
  actions?: React.ReactElement | null;
}

const Modal: FC<ModalProps> = ({
  children,
  color = 'light',
  actions = null,
}) => {
  return (
    <div className={Styles.modal}>
      <ModalBackground color={color} />
      <div className={Styles.modal__aux}>
        <div className={Styles.modal__content}>
          <div className={Styles.modal__content_content}>
            {children}
          </div>
          {actions && (
            <div className={Styles.modal__content_actions}>
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
