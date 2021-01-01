import Head from "next/head";

import AppBar from "../components/AppBar";

import "./global.scss";

function MmoApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <div className="page">
        <AppBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MmoApp;
