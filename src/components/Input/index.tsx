import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export default function Input({...props }: InputProps) {
  return (
    <Container {...props} />
  )
}