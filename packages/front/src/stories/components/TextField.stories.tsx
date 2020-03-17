/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { TextField } from "@material-ui/core";
import { withKnobs } from "@storybook/addon-knobs";
import LoginField from "../../components/input/LoginField";

export default {
  title: "Component|Input/TextInput",
  component: TextField,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "텍스트 입력 컴포넌트",
  },
};

const wrapper = css`
  > div {
    margin-bottom: 0.5rem;
  }
`;

export const Login = () => {
  return (
    <div css={wrapper}>
      <LoginField placeholder="아이디를 입력해주세요" label="아이디" variant="outlined" />
    </div>
  );
};
