/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LoginForm from "../components/form/LoginForm";
import LoginField from "../components/input/LoginField";
import LoginButton from "../components/button/LoginButton";
import logo from "../images/kidsfactory-logo.png";
import SEO from "../components/seo";
import { Fragment } from "react";

const LoginPage = () => {
  return (
    <Fragment>
      <SEO title="로그인" />
      <div css={style}>
        <LoginForm>
          <section className="logo">
            <img src={logo} />
          </section>
          <section className="form-item">
            <LoginField placeholder="아이디를 입력해주세요." label="아이디" variant="outlined" />
          </section>
          <section className="form-item">
            <LoginField
              placeholder="비밀번호를 입력해주세요."
              label="비밀번호"
              variant="outlined"
            />
          </section>
          <section className="form-item">
            <LoginButton type="submit" style={{ width: "100%" }}>
              로그인
            </LoginButton>
          </section>
        </LoginForm>
      </div>
    </Fragment>
  );
};

const style = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo > img {
    width: 100%;
    height: 4rem;
    margin: 0;
  }
  .form-item {
    margin-bottom: 30px;
  }
`;

export default LoginPage;
