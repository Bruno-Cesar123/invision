import { render } from '@testing-library/react';
import ButtonGoogle from '../../components/ButtonGoogle';

describe('Button Component', () => {
  it('should be able to render a button google', () => {
    const { getByText } = render(
      <ButtonGoogle title="Sign in with Google" />
    );

    expect(getByText('Sign in with Google')).toBeTruthy();
  })
})