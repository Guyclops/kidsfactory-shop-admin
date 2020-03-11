import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { observer, inject } from "mobx-react";
import Store from "../stores";

const IndexPage = (props: Store) => {
  const { common } = props;
  const [value, setValue] = useState(0);

  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  const decrement = useCallback(() => {
    setValue(value - 1);
  }, [value]);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>component state {value}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <h1>
        mobx state {common.count} {common.unfinishedTodoCount}
      </h1>
      <button onClick={common.increment}>+</button>
      <button onClick={common.decrement}>-</button>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default inject("common")(observer(IndexPage));
