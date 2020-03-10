/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FormProps } from "../props/form.props";

const LoginForm = (props: FormProps) => {
  return (
    <form css={style} {...props}>
      {props.children}
    </form>
  );
};

LoginForm.defaultProps = {
  onSubmit: e => e.preventDefault(),
};

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 400px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.09);
  padding: 30px 30px;

  & > section {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    justify-content: center;
    box-shadow: 0 0 0 0;
  }
`;

export default LoginForm;
