import React from 'react';
import { Typography, Button } from '../../';
import { CenterInView } from '../';
import Style from './ErrorBody.module.scss';

function ErrorBody(props) {
    return (
        <div className={Style.root}>
            <CenterInView>
                <div className={Style.body}>
                    {props.d !== '' && (
                        <div className={Style.img}>
                            <svg
                                x="0px"
                                y="0px"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24">
                                <path className={Style.fill} d={props.d} />
                            </svg>
                        </div>
                    )}

                    <Typography
                        variant={'body1'}
                        color={'textPrimary'}
                        gutterBottom>
                        {props.message}
                    </Typography>

                    {/* <IconButton onClick={props.handleClick}>
                            <Icon iconName={'refresh'} color={'primary'} />
                        </IconButton> */}
                    <Button
                        onClick={props.handleClick}
                        variant={'outlined'}
                        color={'primary'}>
                        Tentar Novamente
                    </Button>
                </div>
            </CenterInView>
        </div>
    );
}

export default ErrorBody;
