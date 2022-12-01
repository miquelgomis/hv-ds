import React from 'react';

import Text, { TextProps } from './../../components/Text/Text/index.tsx';

export default {
  title: 'Text/Text',
  component: Text,
  argTypes: TextProps,
};

const Template = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas tempor diam eu suscipit. Vestibulum tristique elementum commodo. Suspendisse a augue viverra neque molestie suscipit. In sodales felis in diam porttitor, a volutpat ipsum egestas. Nunc eget est dui. Ut scelerisque neque ante, ac malesuada diam tempor at. Praesent fermentum blandit ipsum ut aliquam. Suspendisse potenti. Vestibulum pulvinar nibh non lorem dictum, vitae posuere risus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vulputate condimentum diam nec iaculis. Suspendisse sagittis euismod ipsum. Pellentesque maximus tortor id finibus aliquam.',
  Tag: 'p',
  italic: false
};