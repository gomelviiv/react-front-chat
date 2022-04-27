import React, { FC } from 'react';
import { Fab, FormLabel, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useForm, SubmitHandler } from 'react-hook-form';

import { IUserRegistrationRequestData } from 'shared/interfaces/user/userRegistration.interface';
import useRegistration from 'shared/api/hooks/useRegistration';
import { FormLabelError } from 'shared/components';

import { RegistrationInputs } from './__types__/';
import { registrationStyles, textFieldStyles } from './styles';

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
      picture: null,
    },
  });

  const { registerUser } = useRegistration();

  const onSubmit: SubmitHandler<RegistrationInputs> = (data: IUserRegistrationRequestData) => {
    console.log(data);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key] instanceof FileList) {
        Array.from(data[key]).forEach((picture: File) =>
          formData.append(`${key}`, picture, picture.name),
        );
      } else {
        formData.append(`${key}`, data[key]);
      }
    });

    return registerUser(formData);
  };
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
          {errors.passwordAgain && <FormLabel color="error">This field is required</FormLabel>}
          <Stack>
            <label htmlFor="picture">
              <input
                style={{ display: 'none' }}
                id="picture"
                name="picture"
                type="file"
                {...register('picture')}
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
