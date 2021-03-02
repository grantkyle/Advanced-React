import Page from '../components/Page';

//TODO: Swap with my own;
import 'nprogress/nprogress.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
