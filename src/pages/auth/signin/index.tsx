"use client";

import React, { useState } from 'react';
import { Container, TextField, FormControlLabel, Checkbox, Button, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Link from 'next/link';
import { validateEmail, validatePassword } from '@/script/validator';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { request } from '@/script/fetch/fetch.config';

const SignInPage = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    rememberMe: false    
  });

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: any) => {
    setLogin({...login, email: event.target.value });
  };

  const handlePasswordChange = (event: any) => {
    setLogin({...login, password: event.target.value });
  };

  const handleRememberMeChange = (event: any) => {
    setLogin({...login, rememberMe: event.target.checked });
  };

  const validateForm = () => {
    const emailError = validateEmail(login.email);
    const passwordError = validatePassword(login.password);

    setErrors({ emailError, passwordError });
    if (emailError || passwordError) {
      return false;
    } else {
      return true;
    }
  }

  const handleSignIn = () => {
    if (!validateForm()) return;

    // Perform sign-in logic here
    // request();
  };

  return (
    <div className='h-100vh flex-center'>
    <Container maxWidth="xs">

      <h1 className='m-auto ta-center'>SIGN IN</h1>

      <form>
        <TextField
          label="Email"
          type="email"
          value={login.email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          error={!!errors.emailError}
          helperText={errors.emailError}
          onBlur={validateForm}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={login.password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          error={!!errors.passwordError}
          helperText={errors.passwordError}
          onBlur={validateForm}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((show) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
        <FormControlLabel
          control={<Checkbox checked={login.rememberMe} onChange={handleRememberMeChange} />}
          label="Remember Me"
          />
        <Link href="/dashboard/management/users" className="d-flex float-right" style={{fontSize: '16px'}}>Forgot Password?</Link>
        </div>
        <Button variant="contained" color="primary" onClick={handleSignIn} fullWidth>
          Sign In
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default SignInPage;