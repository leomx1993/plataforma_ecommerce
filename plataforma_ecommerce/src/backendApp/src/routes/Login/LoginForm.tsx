import Input from '@mui/joy/Input';
import Checkbox from '@mui/joy/Checkbox';
import Button from '@mui/joy/Button';
import './LoginForm.css'
import { useEffect, useState } from 'react';
import { purple } from '@mui/material/colors';
import { Navigate, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function LoginForm () {

  const DefaultEmail = 'admin@email.com'
  const DefaultPassword = 'password@123456'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);


  const LoginClick = () => {
    if (email !== DefaultEmail || password !== DefaultPassword) {
      setLoginError(true)
      console.log("email ou senha inválido(s)");
    } else {
        console.log(`Credenciais corretas: ${email} ${password}`);
        console.log('loading começando')
        setLoading(true);
        setTimeout (() => {
          console.log('loading finalizado')
          setLoading(false);
          navigate('/user-area')
        }, 2000)
      }
  };

  return (
    <>
      <div className={`login-form-container ${loading ? 'loading' : ''} ${loginError ? 'login-error' : ''} `}>
        { loading && (
          <div>
            <CircularProgress 
              size='70px'
            />
          </div>
          )
        }
        {
          loginError && (
            <div>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">E-mail ou senha inválido(s). Por favor, tente novamente.</Alert>
              </Stack>
            </div>
          )
        }
          {
          loading && ( 
            <div>
              <Stack sx={{ width: '100%', zIndex: '10' }} spacing={2}>
                <Alert 
                  severity="success">Credenciais validadas! 
                </Alert>
              </Stack>
            </div>
          )
        }
        <div className="login-title-container">
          <h1 className="login-message">Login</h1>
        </div>
        <div className="login-subtitle-container">
          <h2 className="login-subtitle">Por favor, insira seu e-mail e senha:</h2>
        </div>
        <div className="login-email-input-container">
          <Input 
            className="login-email-input" 
            placeholder="E-mail" 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> 
        <div className="login-password-input-container">
          <Input 
            className="login-password-input" 
            type="password" 
            placeholder="Senha" 
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className="login-remember-me-checkbox-container">
          <Checkbox 
            className="login-remember-me-checkbox"
            color="secondary"
            label="Lembrar-me" 
            sx={{
              color: purple[800],
              '&.Mui-checked': {
                color: purple[600],
              },
            }}
          />
        </div>
        <div className="login-remember-me-checkbox-container">
          
        </div>
        <div className="login-button-container">
          <Button 
            className="login-button" 
            size="large"  
            onClick={LoginClick}>Login
          </Button> 
        </div>
        <div className="forgot-password-hyperlink-container">
          <a className="forgot-password-hyperlink" href="./">Esqueceu a senha?</a>
        </div>
      </div>
    </>
  )
}

export default LoginForm;

