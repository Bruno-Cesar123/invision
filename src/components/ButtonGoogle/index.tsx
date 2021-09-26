import { ButtonHTMLAttributes } from 'react';

import logoGoogle from '../../assets/google.svg';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  title: string;
}

export default function ButtonGoogle({ title , ...rest}: ButtonProps) {
  return (
    <Container {...rest}>
      <img src={logoGoogle} alt="icone do google" />
      {title}
    </Container>
  )
}