import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/material';

import AppleLogin from 'react-apple-login'
import { GoogleLoginButton, MicrosoftLoginButton, FacebookLoginButton } from 'react-social-login-buttons';

import './RegistrationDialog.scss'

const RegistrationDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='wrapper'>
            <Button variant="outlined" onClick={handleClickOpen} color='secondary'>
                Войти
            </Button>
            <Dialog className='register' open={open} onClose={handleClose}>
                <DialogTitle className='register-title'>Huelo</DialogTitle>
                <DialogContent>
                    <TextField
                        className='register-login'
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        className='register-login'
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                    <Button className='register-btn-resume' fullWidth variant="contained">Продолжить</Button>
                    <span className='register-choice'>или</span>
                    <AppleLogin designProp={width: 100} clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" />
                    <MicrosoftLoginButton onClick={() => alert("Microsoft")} />
                    <GoogleLoginButton onClick={() => alert("Google")} />
                    <FacebookLoginButton onClick={() => alert("Facebook")} />
                </DialogContent>
                <Container className='register-wrp'>
                    <Button variant="text">Не удаётся войти в систему?</Button>
                    -
                    <Button variant="text">Создать аккаунт</Button>
                </Container>
                <Button onClick={handleClose}>Закрыть</Button>
            </Dialog>
        </div>
    )
}

export default RegistrationDialog;