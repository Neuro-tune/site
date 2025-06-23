import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Neuro•Tune — Музыка. Эффекты. Эмоции.</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
