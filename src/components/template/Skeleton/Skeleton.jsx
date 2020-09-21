import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Style from './Skeleton.module.scss';
function Skeleton(props) {
    const xClass = classNames([
        Style.root,
        {
            [Style.navbarDense]: props.variant === 'dense',
            [Style.navbarRegular]: props.variant === 'regular',
            [Style.navbarLarge]: props.variant === 'large'
        }
    ]);

    if (React.Children.count(props.children) !== 2) {
        console.error('Skeleton deve possuir 2 elementos filhos');
        return null;
    }

    const navbar = props.children[0];
    const body = props.children[1];

    return (
        <section className={xClass}>
            <nav className={Style.head}>
                {React.cloneElement(navbar, { variant: props.variant })}
            </nav>
            <main className={Style.body}>
                {React.cloneElement(body, { variant: props.variant })}
            </main>
        </section>
    );
}

Skeleton.propTypes = {
    variant: PropTypes.string
};

Skeleton.defaultProps = {
    variant: 'regular'
};

export default Skeleton;
