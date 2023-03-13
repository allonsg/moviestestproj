//* полуработающий 1 код ф-ция

import { FC } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import { wrapper } from '@/redux/store';
import { Global } from '@emotion/react';
import { GlobalStyles } from '@/styles/globalStyles';
import NextNProgress from 'nextjs-progressbar';

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />
          <NextNProgress />
          <Component {...props.pageProps} />
        </ThemeProvider>
    </Provider>
  );
};

export default MyApp;

//* полуработающий код 2 классы
// import React from 'react';
// import { AppProps } from 'next/app';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from '@/styles/theme';
// import {  wrapper } from '@/redux/store';
// import { Global } from '@emotion/react';
// import { GlobalStyles } from '@/styles/globalStyles';
// import NextNProgress from 'nextjs-progressbar';

// const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  
//   return (
//     <ThemeProvider theme={theme}>
//         <Global styles={GlobalStyles} />
//         <NextNProgress />
//         <Component {...pageProps} />
//       </ThemeProvider>
//   );
// };

// export default wrapper.withRedux(MyApp);


