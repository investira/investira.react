import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon, IconButton, JsonTextFormated } from '../';

import Style from './Tips.module.scss';

const Tips = memo(props => {
    const descRef = React.useRef();
    const bodyRef = React.useRef();

    const [show, setShow] = useState(false);

    const handleToogle = () => {
        setShow(!show);
        const xDescElem = descRef.current;
        const xHeightSize = !show ? `${bodyRef.current.clientHeight}px` : '0';
        xDescElem.style.height = xHeightSize;
    };

    const xClassDesk = classNames(Style.desc, props.className, {
        [Style.show]: show
    });

    return (
        <div className={Style.root}>
            <IconButton onClick={handleToogle}>
                <Icon
                    iconName={props.iconName}
                    size={props.size}
                    color={props.color}
                />
            </IconButton>
            <div ref={descRef} className={xClassDesk} style={{ height: 0 }}>
                <div ref={bodyRef} className={Style.body}>
                    <JsonTextFormated
                        text={props.desc}
                        color={'textSecondary'}
                        variant={'caption'}
                        component={'p'}
                        gutterBottom
                    />
                </div>
            </div>
        </div>
    );
});

Tips.propTypes = {
    iconName: PropTypes.string,
    desc: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    variant: PropTypes.oneOf(['float', 'default'])
};

Tips.defaultProps = {
    iconName: 'lamp',
    desc: 'Utilize a prop "desc" para inserir uma descrição',
    size: 16,
    variant: 'default',
    color: 'primary'
};

export default Tips;
