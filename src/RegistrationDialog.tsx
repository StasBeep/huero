import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
// Иконку надо где-то найти
import SlackIcon from '@mui/icons-material/Google';

import './RegistrationDialog.scss'

import ButtonRegister from './ButtonRegister';

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
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <Button className='register-btn-resume' fullWidth variant="contained">Продолжить</Button>
                    <span className='register-choice'>или</span>
                    <ButtonRegister description='Войти с помощью Google' icon={GoogleIcon} />
                    <ButtonRegister description='Войти с помощью Майкрософт' icon={AppleIcon} />
                    <ButtonRegister description='Войти с помощью Apple' icon={MicrosoftIcon} />
                    <ButtonRegister description='Войти с помощью Slack' icon={SlackIcon} />
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