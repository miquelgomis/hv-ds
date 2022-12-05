import React from 'react';

import Wrapper, { WrapperProps } from './index.tsx';

export default {
  title: 'Layout/Wrapper',
  component: Wrapper,
  argTypes: WrapperProps,
};

const Template = (args) => <Wrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 1200,
  children: <>
    Wrapper
  </>
};
