import React from 'react';

import Modal, { ModalProps } from './index.tsx';

export default {
  title: 'Modals/Modal',
  component: Modal,
  argTypes: ModalProps,
};

const Template = (args) => <Modal {...args} />;

export const ModalSinAcciones = Template.bind({});
ModalSinAcciones.args = {
  color: "light",
  children: <>
    Contenido del modal sin acciones
  </>
};

export const ModalConAcciones = Template.bind({});
ModalConAcciones.args = {
  color: "light",
  children: <>
    Contenido del modal
  </>,
  actions: <>
    Acciones
  </>
};
