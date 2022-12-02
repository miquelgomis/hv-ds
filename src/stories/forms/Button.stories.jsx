import React from 'react';

import Button, { ButtonProps } from './../../components/Forms/Button';

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: ButtonProps,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Texto',
  color: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Cancelar',
  color: "secondary"
};