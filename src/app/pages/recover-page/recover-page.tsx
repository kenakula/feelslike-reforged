import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SIGNIN_PAGE_PATH, SIGNUP_PAGE_PATH } from 'app/routes';
import { Copyright } from 'app/components';
import { ReactComponent as RecoverImage } from 'assets/img/restore-password.svg';
import { FormModel, formSchema } from './assets';

export const RecoverPage = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormModel>({
    defaultValues: { email: '' },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any): void => {
    console.log(data);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        position: 'relative',
        paddingTop: '230px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: 0,
          width: '100%',
          maxWidth: '320px',
          margin: '0 auto',
          transform: 'translateX(-50%)',
          svg: {
            maxWidth: '100%',
            height: 'auto',
          },
        }}
      >
        <RecoverImage />
      </Box>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: '10',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', alignSelf: 'center' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ alignSelf: 'center' }}>
            Сбросить пароль
          </Typography>
          <Typography sx={{ mb: 2 }} variant="caption" textAlign="center">
            На указанную почту будет отправлено письмо с инструкцией к сбросу
            пароля
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.email}
                  label="Почта"
                  fullWidth
                  variant="outlined"
                  type="text"
                />
              )}
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              startIcon={<ExitToAppIcon />}
              loadingPosition="start"
              loading={false}
              sx={{ mt: 3, mb: 2 }}
            >
              Сбросить
            </LoadingButton>
            <Grid container>
              <Grid item xs={6}>
                <Link to={SIGNIN_PAGE_PATH} component={NavLink} variant="body2">
                  Есть аккаунт?
                </Link>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Link variant="body2" component={NavLink} to={SIGNUP_PAGE_PATH}>
                  Зарегистрируйтесь.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};