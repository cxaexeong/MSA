import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import LoginStore from '../../../store/LoginStore';
// ----------------------------------------------------------------------

export default function LoginForm(props) {
  const ls = LoginStore;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });
//   axios.post('http://localhost:8000/login/',{
//     username,
//     password,
// }).then(function (res){
//     console.log(res)
//     console.log(res.data.token)
//     console.log(res.config.data)
//     localStorage.setItem('token', res.data.token);
//     localStorage.setItem('user', res.config.data);
//     loginInfo.setUser(res.config.data);
//     loginInfo.setToken(res.data.token);
// }).catch(function (err){
//     console.log(err)
//     alert("아이디, 비밀번호를 확인하세요.")
// })
// }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      // postLoginInfo(values)
      navigate('/dashboard', { replace: true });    }
  });

  const handleSubmit = (event) => {
    axios.post('http://localhost:8000/login/',{
        username: values.email,
        password: values.password
    }).then(function (res){
      localStorage.setItem('token', res.data.token);
      console.log(res)

       localStorage.setItem('user', values.email);
       localStorage.setItem('id', res.data.user.id);
       localStorage.setItem('firstname', res.data.user.first_name)
       localStorage.setItem('lastname', res.data.user.last_name)
       ls.setToken(res.data.token);
       ls.setUser(res.data.user.id, res.data.user.username, res.data.user.first_name,res.data.user.last_name);
       ls.userHasAuthenticated(true);
       navigate('/login', { replace: true }); 
       }).catch(function (err){
        console.log(err)
        alert("아이디와 비밀번호를 확인하세요");
    })
    event.preventDefault();
}

  const { errors, touched, values, isSubmitting, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />
          <a  target="_blank" href="http://localhost:8000/user/password_reset/">
            Forgot password?
            </a>
 
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          onClick={handleSubmit}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
