import React from "react";

import { Layout } from "../components";
import "../styles/index.css";

import { StateContext } from "../hooks/StateContext";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
};

export default MyApp;
