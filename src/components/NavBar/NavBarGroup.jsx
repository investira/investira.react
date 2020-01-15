import React from 'react';
import classNames from 'classnames';

const NavBarGroup = (props) => {
  const { parent, align, children } = props;

  let navBarGroup = classNames({
    [`${parent}__group`]: true,
    [`${parent}__group--left`]: align === 'left',
    [`${parent}__group--right`]: align === 'right',
  });
  return <div className={navBarGroup}>{children}</div>;
};

export default NavBarGroup;
