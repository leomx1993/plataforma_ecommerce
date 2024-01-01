import LoginForm from "./LoginForm";
import './Login.css';
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";

function Login() {
  return (
    <div className="login-container">
      <div className="login-content-container">
        <Card
          className="login-card-container"
          sx={{
            minWidth: 700,
            maxWidth: 1000,
            borderRadius: '50px',
            backgroundColor: '#F5F5F5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          variant="outlined"
        >
          <CardContent
            className="login-card-content">
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
};

export default Login;







