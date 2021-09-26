import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import ButtonGoogle from '../../components/ButtonGoogle';
import Input from '../../components/Input';


import { Container, Header, Form, Actions, Info } from './styles';
import Background from '../../components/Background';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('*Este campo não pode estar vazio'),
  email: Yup.string()
    .required('*Este campo não pode estar vazio')
    .email('Email incorreto'),
  password: Yup.string().min(6, '*No mínimo 6 caracteres').required('*Este campo não pode estar vazio'),
});

export default function SignUp() {
  const history = useHistory();

  function SignUpWithGoogle() {
    try {
      history.push('/');
      toast.success('Cadastro com google realizado com sucesso');
    } catch(err) {
      toast.error('Não foi possível realizar o cadastro com google');
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit:(data: SignUpFormData) => {
      try {
        history.push('/');
        toast.success('cadastro realizado com sucesso');
      } catch(err) {
        toast.error('Não foi possícel realizar o cadastro');
      }
    }
  })

  return (
    <Container>
      <Background />
      <section>
        <Header>
          <h3>Invision</h3>
        </Header>

        <Form onSubmit={formik.handleSubmit}>
          <h1>Getting Started</h1>

          <label htmlFor="name">Full name
            <Input
              type="text" 
              id="name"
              name="name"
              title="name"
              aria-label="Input de nome"
              value={formik.values.name}
              onChange={formik.handleChange}
              className={`${formik.touched.name && Boolean(formik.errors.name) ? 'error': ''}`}
            />
            <p>{formik.touched.name && formik.errors.name}</p>
          </label>


          <label htmlFor="email">Users name or email
            <Input
              type="text" 
              id="email"
              name="email"
              title="email"
              aria-label="Input de email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`${formik.touched.email && Boolean(formik.errors.email) ? 'error': ''}`}
            />
            <p>{formik.touched.email && formik.errors.email}</p>
          </label>
          

          <label htmlFor="password">Password
            <Input 
              type="password" 
              id="password"
              title="password"
              name="password"
              aria-label="Input de senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              className={`${formik.touched.password && Boolean(formik.errors.password) ? 'error': ''}`}
            />
            <p>{formik.touched.password && formik.errors.password}</p>
          </label>

          <Button
            type="submit"
            title="Sign up"
          />

          <p>Or</p>

          <ButtonGoogle
            type="button"
            title="Sign up with Google"
            onClick={SignUpWithGoogle}
          />

          <Info>
              By signing up, you agree to <span>Invison</span>
              <div>
                <Link to="/">Terms of Conditions</Link> and 
                <Link to="/"> Privacy Police</Link>
              </div>
          </Info>

          <Actions>
              <p>Already on <span>Invision?</span></p>
              <Link to="/">Log in</Link>
          </Actions>
        </Form>
      </section>
    </Container>
  )
}