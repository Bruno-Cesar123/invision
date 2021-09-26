import { ReactNode } from 'react';
import SignIn from '../../pages/SignIn';
import { render, fireEvent, waitFor } from '@testing-library/react';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: ReactNode }) => children,
  }
})

describe('SignIn Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  })
  it('should be able to sign in', async () => {
    const { getByTitle, getByText } = render(<SignIn />);

    const emailFiled = getByTitle("email");
    const passwordFiled = getByTitle("password");
    const buttonElement = getByText("Sign in");

    fireEvent.change(emailFiled, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordFiled, { target: { value: '123456' } });
    
    fireEvent.click(buttonElement);


    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    })  
  })

  it('should be able to sign in with google', async () => {
    const { getByText } = render(<SignIn />);

    const buttonElement = getByText("Sign in with Google");

    fireEvent.click(buttonElement);


    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    })  
  })

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByTitle, getByText } = render(<SignIn />);

    const emailFiled = getByTitle("email");
    const passwordFiled = getByTitle("password");
    const buttonElement = getByText("Sign in");

    fireEvent.change(emailFiled, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordFiled, { target: { value: '123456' } });
    
    fireEvent.click(buttonElement);


    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    })  
  })
})