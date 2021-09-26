import { ReactNode } from 'react';
import SignUp from '../../pages/SignUp';
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

describe('SignUp Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to sign up', async () => {
    const { getByTitle, getByText } = render(<SignUp />);

    const nameFiled = getByTitle("name");
    const emailFiled = getByTitle("email");
    const passwordFiled = getByTitle("password");
    const buttonElement = getByText("Sign up");

    fireEvent.change(nameFiled, { target: { value: 'John Doe' } });
    fireEvent.change(emailFiled, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordFiled, { target: { value: '123456' } });
    
    fireEvent.click(buttonElement);


    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    })  
  })

  it('should be able to sign up with google', async () => {
    const { getByText } = render(<SignUp />);

    const buttonElement = getByText("Sign up with Google");

    fireEvent.click(buttonElement);


    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    })  
  })
  it('should not be able to sign up with invalid credentials', async () => {
    const { getByTitle, getByText } = render(<SignUp />);

    const nameFiled = getByTitle("name");
    const emailFiled = getByTitle("email");
    const passwordFiled = getByTitle("password");
    const buttonElement = getByText("Sign up");

    fireEvent.change(nameFiled, { target: { value: 'John Doe' } });
    fireEvent.change(emailFiled, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordFiled, { target: { value: '123456' } });
    
    fireEvent.click(buttonElement);


    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    })  
  })
})