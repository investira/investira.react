import React from "react";
import MomentUtils from "@date-io/moment";
//import { Icon } from '../../app/components';
import {
  KeyboardDatePicker as WKeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers/";

import "moment/min/locales";

const KeyboardDatePicker = props => {
  console.log(props);
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={props.locale}>
      <WKeyboardDatePicker
        {...props}
        // keyboardIcon={<Icon iconName="calendar" size="21" />}
        refuse={/[^\d]+/gi}
        cancelLabel="fechar"
      />
    </MuiPickersUtilsProvider>
  );
};

export default KeyboardDatePicker;
