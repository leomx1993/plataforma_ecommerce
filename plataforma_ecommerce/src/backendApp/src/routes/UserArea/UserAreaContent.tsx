import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import TimelineTwoToneIcon from '@mui/icons-material/TimelineTwoTone';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ResponsiveAppBar from './AppBar'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const drawerWidth = 250;

function UserAreaContent() {

  const theme = createTheme({
    components: {

      MuiToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: '#a540e9',
            padding: '25.9px',
            justifyContent: 'center',
            color: '#ffdf2b',
            fontSize: '30px'
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: 'flex' }}
      >TESTE
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            WEB LOJA
          </Toolbar>
          <Divider />
          <List>
            {['Suas vendas', 'Seus produtos', 'Performance', 'Sua loja'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? <AttachMoneyTwoToneIcon fontSize='large' /> : ''}
                    {index === 1 ? <LocalMallOutlinedIcon fontSize='large' /> : ''}
                    {index === 2 ? <TimelineTwoToneIcon fontSize='large' /> : ''}
                    {index === 3 ? <StorefrontOutlinedIcon fontSize='large' /> : ''}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Mensagens', 'Configurações', 'Quero ajuda'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? <ForumOutlinedIcon fontSize='large' /> : ''}
                    {index === 1 ? <SettingsOutlinedIcon fontSize='large' /> : ''}
                    {index === 2 ? <HelpOutlineOutlinedIcon fontSize='large' /> : ''}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box>
          <ResponsiveAppBar />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginLeft: '5%',
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: '10',
            top: '0',
            backgroundColor: '#d8c3fe',
          }}
        >
          <Card
            sx={{
              borderRadius: '50px',
              width: '100vw',
              maxWidth: '23%',
              height: '29.5%',
              position: 'fixed',
              zIndex: '11',
              marginTop: '8%',
              marginLeft: '11%',
            }}>
             <CardActionArea component="div" onClick={() => console.log('Card 1 clicado')}>
                <CardMedia
                component="img"
                height="100%"
                image="src/assets/card1.png"
                alt=""
              />
            </CardActionArea>
          </Card>
          <Card
            sx={{
              borderRadius: '50px',
              flex: 1,
              width: '100vw',
              maxWidth: '23%',
              height: '29.5%',
              position: 'fixed',
              zIndex: '11',
              marginTop:'8%',
              marginLeft:'36%',
            }}>
              <CardActionArea component="div" onClick={() => console.log('Card 2 clicado')}>
                <CardMedia
                component="img"
                height="100%"
                image="src/assets/card2.png"
                alt=""
              />
            </CardActionArea>
          </Card>
          <Card
            sx={{
              borderRadius: '50px',
              flex: 1,
              width: '100vw',
              maxWidth: 590,
              height: '80%',
              position: 'fixed',
              zIndex: '11',
              marginTop:'8%',
              marginLeft:'61%',
              alignContent: 'center',
              alignItems: 'center',
            }}>
              <CardActionArea component="div" onClick={() => console.log('Card 3 clicado')}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="src/assets/card3.png"
                  alt=""
                />
              </CardActionArea>
          </Card>
          <Card
            sx={{
              borderRadius: '50px',
              flex: 1,
              width: '100vw',
              maxWidth: '48%',
              position: 'fixed',
              zIndex: '11',
              marginTop:'25%',
              marginLeft:'11%',
              height: '46.8%',
            }}>
              <CardActionArea component="div" onClick={() => console.log('Card 4 clicado')}>
                <CardMedia
                component="img"
                height="100%"
                image="src/assets/card4.png"
                alt=""
                />
              </CardActionArea>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserAreaContent;
