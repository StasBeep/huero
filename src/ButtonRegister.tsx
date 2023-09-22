import Button from '@mui/material/Button';

import './RegistrationDialog.scss';

interface ButtonRegisterProps {
    icon: any;
    description: string;
}

const ButtonRegister = ({description, icon}:ButtonRegisterProps) => {
    return (
        <Button
            className='register-btn'
            fullWidth
            variant="outlined"
            // TODO: как подключить разные иконки
            // startIcon={<`${icon}` />}
            color='inherit'>
            {description}
        </Button>
    )
}

export default ButtonRegister;