/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LoginForm from "../components/form/LoginForm";
import LoginField from "../components/input/LoginField";
import LoginButton from "../components/button/LoginButton";
import logo from "../images/kidsfactory-logo.png";
import Layout from "../components/layout";
import SEO from "../components/seo";

const LoginPage = () => {
  return (
    <Layout>
      <SEO title="로그인" />
      <div css={style}>
        <LoginForm>
          <section>
            <img src={logo} />
          </section>
          <section>
            <LoginField placeholder="아이디를 입력해주세요." label="아이디" variant="outlined" />
          </section>
          <section>
            <LoginField
              placeholder="비밀번호를 입력해주세요."
              label="비밀번호"
              variant="outlined"
            />
          </section>
          <section>
            <LoginButton type="submit" style={{ width: "100%" }}>
              로그인
            </LoginButton>
          </section>
        </LoginForm>
      </div>
    </Layout>
  );
};

const style = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  > img {
    width: 100%;
    height: 5rem;
  }
`;

export default LoginPage;
