import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Fab, FormLabel, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormLabelError } from '../../shared/components';
import { registrationStyles, textFieldStyles } from './styles';

type RegistrationInputs = {
  login: string;
  password: string;
  passwordAgain: string;
  email: string;
  image: string;
};

const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationInputs>({
    defaultValues: {
      // TODO: move in separate file
      login: '',
      email: '',
      password: '',
      passwordAgain: '',
      image: '',
    },
  });

  const onSubmit: SubmitHandler<RegistrationInputs> = (
    data: RegistrationInputs,
  ) => console.log(2123, data);
  return (
    <Stack display="block" sx={registrationStyles}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} direction="column">
          <TextField
            sx={textFieldStyles}
            label="login"
            {...register('login', { required: true })}
          />
          {errors.login && <FormLabelError fieldName="Login" />}
          <TextField label="email" {...register('email', { required: true })} />
          {errors.email && <FormLabelError fieldName="Email" />}
          <TextField
            type="password"
            label="password"
            {...register('password', { required: true })}
          />
          {errors.password && <FormLabelError fieldName="Password" />}

          <TextField
            type="password"
            label="password again"
            {...register('passwordAgain', {
              validate: (value) => value !== 'password',
            })}
          />
          {errors.passwordAgain && (
            <FormLabel color="error">This field is required</FormLabel>
          )}
          <Stack>
            <label htmlFor="upload-photo">
              <input
                style={{ display: 'none' }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                {...register('image')}
              />

              <Fab
                color="secondary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
              >
                <AddIcon /> Upload photo
              </Fab>
            </label>
          </Stack>

          <Button size="small" variant="outlined" type="submit">
            Register
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Registration;
