import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import { Stack } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

import './login.scss';
import useLogin from 'shared/api/hooks/useLogin';
import { IUserLoginRequest } from 'shared/interfaces/user/userLogin.interface';
import { toFormData } from 'shared/helpers/ToFormData';

import { LoginInputs } from './__types__';
import { loginConstants } from './__constants__';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ defaultValues: { ...loginConstants } });

  const { userLogin } = useLogin();

  const onSubmit: SubmitHandler<LoginInputs> = (data: IUserLoginRequest) => {
    const formData = toFormData<IUserLoginRequest>(data);
    console.log(123);
    return userLogin(formData);
  };

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
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} direction="column">
          <TextField
            className="login-form__text-field"
            label="login"
            {...register('login', { required: true })}
          />
          {errors.login && <span>This field is required</span>}

          <TextField
            className="login-form__text-field"
            type="password"
            label="password"
            sx={{
              root: { icon: { color: 'red' } },
            }}
            {...register('password', { required: true })}
          />
          {errors.password && <FormLabel color="error">This field is required</FormLabel>}
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button type="submit">Войти</Button>
            <Link style={{ textDecoration: 'none' }} to="/registration">
              <Button>Регистрация</Button>
            </Link>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Login;
