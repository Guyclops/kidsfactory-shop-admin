/** @jsx jsx */
import { jsx } from "@emotion/core";
import { withStyles, Button, ButtonProps } from "@material-ui/core";

const LButton = withStyles(() => ({
  root: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(32, 83, 134)",
    height: "3rem",
    "&:hover": {
      backgroundColor: "rgb(32, 83, 134)",
    },
  },
}))(Button);

const LoginButton = (props: ButtonProps) => {
  return <LButton {...props}>{props.children}</LButton>;
};

export default LoginButton;
