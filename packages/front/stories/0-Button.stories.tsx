/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { action } from "@storybook/addon-actions";
import { Button } from "@material-ui/core";
import { withKnobs } from "@storybook/addon-knobs";
import "./styles.css";
import LoginButton from "../src/components/button/LoginButton";

export default {
  title: "Component|Button",
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "버튼 컴포넌트",
  },
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const Login = () => {
  return (
    <div css={buttonWrapper}>
      <LoginButton onClick={action("clicked")}>로그인</LoginButton>
    </div>
  );
};
