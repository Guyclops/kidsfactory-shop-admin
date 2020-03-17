/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LoginForm from "../components/form/LoginForm";
import LoginField from "../components/input/LoginField";
import LoginButton from "../components/button/LoginButton";
import logo from "../images/kidsfactory-logo.png";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { useState, useCallback } from "react";
import { inject, observer } from "mobx-react";
import { Store } from "../stores";
import { navigate } from "gatsby";

const LoginPage = (props: Store) => {
  const { signin } = props;
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = e => {
    e.preventDefault();
    setId(e.target.value);
  };

  const onChangePassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const signIn = useCallback(async () => {
    const result = await signin.signIn(id, password);
    if (result) navigate("/");
  }, [id, password, signin]);

  return (
    <Layout headerVisible={false} footerVisible={false}>
      <SEO title="로그인" />
      <div css={style}>
        <LoginForm>
          <section className="logo">
            <img src={logo} alt="로고 이미지" />
          </section>
          <section className="form-item">
            <LoginField
              id="login-id"
              placeholder="아이디를 입력해주세요."
              label="아이디"
              variant="outlined"
              value={id}
              onChange={onChangeId}
            />
          </section>
          <section className="form-item">
            <LoginField
              id="login-password"
              placeholder="비밀번호를 입력해주세요."
              label="비밀번호"
              variant="outlined"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </section>
          <section className="form-item">
            <LoginButton id="login-button" type="submit" style={{ width: "100%" }} onClick={signIn}>
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

export default inject("signin")(observer(LoginPage));
