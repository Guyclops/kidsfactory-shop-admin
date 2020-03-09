/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { action } from "@storybook/addon-actions";
import logo from "../src/images/kidsfactory-logo.png";
import "./styles.css";
import LoginForm from "../src/components/form/LoginForm";
import LoginField from "../src/components/input/LoginField";
import LoginButton from "../src/components/button/LoginButton";

export default {
  title: "Page|Login",
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

export const LoginPage = () => {
  return (
    <div css={styles.container}>
      <LoginForm>
        <section>
          <img src={logo} css={styles.logo} />
        </section>
        <section>
          <LoginField placeholder="아이디를 입력해주세요." label="아이디" variant="outlined" />
        </section>
        <section>
          <LoginField placeholder="비밀번호를 입력해주세요." label="비밀번호" variant="outlined" />
        </section>
        <section>
          <LoginButton type="submit" style={{ width: "100%" }} onClick={action("clicked")}>
            로그인
          </LoginButton>
        </section>
      </LoginForm>
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `,
  logo: css`
    width: 100%;
    height: 4rem;
  `,
};
