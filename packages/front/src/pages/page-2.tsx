import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { inject, observer } from "mobx-react";
import Store from "../stores";

const SecondPage = (props: Store) => {
  const { common } = props;
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page{common.count}</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default inject("common")(observer(SecondPage));
