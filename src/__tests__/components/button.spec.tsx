import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button Component', () => {
  it('should be able to render a button', () => {
    const { getByText } = render(
      <Button title="Sign in" />
    );

    expect(getByText('Sign in')).toBeTruthy();
  })
})