import React from 'react';
import Style from './Sticky.module.scss';

import classNames from 'classnames';
const { useRef, useState, useEffect } = React;

function Sticky({ children, sticky = false, className, ...rest }) {
    const [isSticky, setIsSticky] = useState(false);
    const elemRef = useRef();

    // mount
    useEffect(() => {
        const cachedRef = elemRef.current,
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                { threshold: [1] }
            );

        observer.observe(cachedRef);

        // unmount
        return function() {
            observer.unobserve(cachedRef);
        };
    }, []);

    const xClass = classNames(className, {
        [Style.root]: true,
        [Style.isSticky]: isSticky
    });

    return (
        <div className={xClass} ref={elemRef} {...rest}>
            {children}
        </div>
    );
}

export default Sticky;
