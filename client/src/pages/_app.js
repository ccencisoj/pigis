import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { CameraProvider } from 'hooks/CameraContext';
import { ModalsProvider } from 'hooks/ModalsContext';
import { StorageProvider } from 'hooks/StorageContext';
import { ViewportProvider } from 'hooks/ViewportContext';

import "../../public/scss/styles.scss";
import "../../public/scss/variables.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <ViewportProvider>
          <StorageProvider>
            <ModalsProvider>
              <CameraProvider>
                <Component {...pageProps}/>
              </CameraProvider>
            </ModalsProvider>
          </StorageProvider>
        </ViewportProvider>
      </Provider>
    )
  }
}

export default (props)=> {
  const router = useRouter();

  return <App {...props}
    router={router}/>
}