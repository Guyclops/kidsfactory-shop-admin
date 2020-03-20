import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

export default {
  title: "Component|Picker",
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

export const DatePicker = (props: KeyboardDatePickerProps) => {
  const [date, setDate] = useState(moment());

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
        value={date}
        onChange={setDate}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};
