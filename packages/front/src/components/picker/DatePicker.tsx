import React from "react";
import {
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const DatePicker = (props: KeyboardDatePickerProps) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        format="YYYY-MM-DD"
        margin="normal"
        label="날짜선택"
        invalidLabel="잘못된 날짜 형식입니다."
        invalidDateMessage="잘못된 날짜 형식입니다."
        maxDateMessage="최대 날짜를 벗어났습니다."
        minDateMessage="최소 날짜를 벗어났습니다."
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
