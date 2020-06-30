import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CenterInView, Typography } from '../';
import Style from './CrossTab.module.scss';

const CrossTab = props => {
    const [anotherTabISOpen, setOpen] = useState(false);
    const xTime = Date.now();
    const xAppName = process.env.REACT_APP_NAME;

    useEffect(() => {
        localStorage.setItem(`${xAppName}-loaded`, xTime);
    }, []);

    useEffect(() => {
        window.addEventListener('storage', e => {
            if (e.key === `${xAppName}-loaded`) {
                setOpen(true);
            }
        });
    }, []);

    if (anotherTabISOpen) {
        return (
            <div className={Style.root}>
                <CenterInView>
                    <Typography align={'center'} color={'textPrimary'}>
                        Está aplicação está sendo executada em outra janela
                    </Typography>
                </CenterInView>
            </div>
        );
    } else {
        return props.children;
    }
};

CrossTab.propTypes = {
    storage: PropTypes.object
};

export default CrossTab;
