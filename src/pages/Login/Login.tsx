import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Form from '@mui/material/FormGroup/FormGroup';
import { Stack } from '@mui/material';

import { useForm, SubmitHandler } from 'react-hook-form';

import './login.scss';
import { Link } from 'react-router-dom';

interface IProps {
  a: string;
}

type LoginInputs = {
  login: string;
  password: string;
};

const Login: React.FC<IProps> = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>({ defaultValues: { login: '', password: '' } });

  const onSubmit: SubmitHandler<LoginInputs> = (data: LoginInputs) =>
    console.log(data);
  console.log(watch('login'));
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '400px',
        maxWidth: '400px',
      }}
    >
      <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} direction="column">
          <TextField
            className="login-form__text-field"
            label="login"
            {...(register('login'), { required: true })}
          />
          {errors.login && <span>This field is required</span>}

          <TextField
            className="login-form__text-field"
            type="password"
            label="password"
            sx={{
              root: { icon: { color: 'red' } },
            }}
            {...(register('password'), { required: true })}
          />
          {errors.password && (
            <FormLabel color="error">This field is required</FormLabel>
          )}
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button type="submit">Войти</Button>
            <Link style={{ textDecoration: 'none' }} to="/registration">
              <Button type="submit">Регистрация</Button>
            </Link>
          </Stack>
        </Stack>
      </Form>
    </Stack>
  );
};

export default Login;
