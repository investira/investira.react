import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CenterInView, Typography } from '../';
import Style from './CrossTab.module.scss';

const CrossTab = props => {
    const [anotherTabISOpen, setOpen] = useState(false);

    const APPNAME = useRef(process.env.REACT_APP_NAME);

    useEffect(() => {
        const xTime = Date.now();
        localStorage.setItem(`${APPNAME.current}-loaded`, xTime);
    }, []);

    useEffect(() => {
        window.addEventListener('storage', e => {
            if (e.key === `${APPNAME.current}-loaded`) {
                setOpen(true);
            }
        });
    }, []);

    if (anotherTabISOpen) {
        return (
            <div className={Style.root}>
                <CenterInView>
                    <Typography align={'center'} color={'textPrimary'}>
                        Esta aplicação está sendo executada <br />
                        em outra janela
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
