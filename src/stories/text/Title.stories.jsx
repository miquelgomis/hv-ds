import React from 'react';

import Title, { TitleProps } from './../../components/Text/Title/index.tsx';

export default {
  title: 'Text/Title',
  component: Title,
  argTypes: TitleProps,
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hotelverse',
  Tag: 'h1',
  size: "m",
  className: '',
  underline: false,
  color: "primary"
};