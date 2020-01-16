import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { validators } from "investira.sdk";
import { capitalize } from "../utils/helpers";
import Style from "./Icon.module.scss";

export const Icon = props => {
  if (validators.isEmpty(props.iconName)) {
    return null;
  }

  const xIconName = "-i_" + props.iconName;
  const xClass = classNames(Style.root, xIconName, props.className, {
    [Style.size16]: props.size === "16",
    [Style.size21]: props.size === "21",
    [Style.size24]: props.size === "24",
    [Style.size28]: props.size === "28",
    [Style.size32]: props.size === "32",
    [Style.size40]: props.size === "40",
    [Style.size50]: props.size === "50",
    [Style.caption]: props.size === "caption",
    [Style.h6]: props.size === "h6",
    [Style[`color${capitalize(props.color)}`]]: props.color !== "default"
  });

  return (
    <svg
      width={16}
      width="100%"
      className={xClass}
      style={props.style}
      viewBox={"0 0 24 24"}
    >
      <use href={`#${xIconName}`} xlinkHref={`#${xIconName}`} />
    </svg>
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf([
    "16",
    "21",
    "24",
    "28",
    "32",
    "40",
    "caption",
    "h6",
    "default"
  ]),
  iconName: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "secondaryLight"
  ])
};

Icon.defaultProps = {
  color: "default",
  size: "24"
};

export default React.memo(Icon);

//export default withStyles(styles, { name: 'Icon' })(Icon);
