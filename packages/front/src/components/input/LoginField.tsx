/** @jsx jsx */
import { jsx } from "@emotion/core";
import { TextField, withStyles, TextFieldProps } from "@material-ui/core";

const LField = withStyles(() => ({
  root: {
    width: "100%",
    height: "3rem",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "rgb(196, 196, 196)",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid rgb(32, 83, 134) !important",
      },
    },
  },
}))(TextField);

const LoginField = (props: TextFieldProps) => {
  return <LField required {...props} />;
};

export default LoginField;
