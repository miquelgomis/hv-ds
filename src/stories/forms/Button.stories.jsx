import React from 'react';

import Button, { ButtonProps } from './../../components/Forms/Button/index.tsx';

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: ButtonProps,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Texto',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Cancelar',
};