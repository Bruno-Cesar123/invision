import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}