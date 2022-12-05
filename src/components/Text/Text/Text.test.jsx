import { render, screen } from '@testing-library/react';
import Text from './index.tsx';

test('Text - It should render the message correctly',  () => {
  render(<Text>Example title</Text>)
  expect(screen.getByTestId('title').outerHTML).toMatch(/Example title/i)
})