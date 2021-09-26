import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import ButtonGoogle from '../../components/ButtonGoogle';
import Input from '../../components/Input';
import Background from '../../components/Background';

import { Container, Header, Form, Actions } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('* Este campo não pode estar vazio')
    .email('* Email incorreto'),
  password: Yup.string().required('* Este campo não pode estar vazio')
});

export default function SignIn() {
  const history = useHistory();

  function SignInWithGoogle() {
    try {
      history.push('/');
      toast.success('Login com google realizado com sucesso');
    } catch {
      toast.error('Não foi possível realizar o login com google');
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (data: SignInFormData) => {
      try {
        history.push('/');
        toast.success('Login realizado com sucesso');
      } catch (err) {
        toast.error('Não foi possível realizar o login');
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
          <h1>Welcome to Invision</h1>

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
              name="password"
              title="password"
              aria-label="Input de senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              className={`${formik.touched.password && Boolean(formik.errors.password) ? 'error': ''}`}
            />
            <p>{formik.touched.password && formik.errors.password}</p>
          </label>

          <Link to="/">
            Forgot password?
          </Link>

          <Button
            type="submit"
            title="Sign in"
          />

          <p>Or</p>

          <ButtonGoogle
            type="button"
            title="Sign in with Google"
            onClick={SignInWithGoogle}
          />

          <Actions>
            <p>New <span>Invision?</span></p>
            <Link to="/signup">Create account</Link>
          </Actions>
        </Form>
      </section>
    </Container>
  )
}