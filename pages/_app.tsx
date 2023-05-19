import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import Layout from "@/layout/Layout";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Head>
            <title>Test Next</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
