import React, { memo, useState } from 'react';
import { TextField, InputAdornment, IconButton } from '../wrapper-material-ui';

import { Icon } from '../';

const PasswordField = memo(props => {
    const [showPass, setShowPass] = useState(false);

    function handleClickShowPassword() {
        setShowPass(!showPass);
    }

    function handleMouseDownPassword(pEvent) {
        pEvent.preventDefault();
    }

    return (
        <TextField
            {...props}
            type={!showPass ? 'password' : 'text'}
            InputProps={{
                ...props.InputProps,
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}>
                            {!showPass ? (
                                <Icon
                                    key="eye_off"
                                    iconName="eye_off"
                                    size={21}
                                    color="primary"
                                />
                            ) : (
                                <Icon
                                    key="eye"
                                    iconName="eye"
                                    size={21}
                                    color="primary"
                                />
                            )}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
});

export default PasswordField;
