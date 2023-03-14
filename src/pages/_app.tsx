import { FC } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { wrapper } from '@/redux/store';
import { Global } from '@emotion/react';
import { GlobalStyles } from '@/styles/globalStyles';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <NextNProgress />
      <ToastContainer />
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default MyApp;