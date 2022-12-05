import React from 'react'
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '../redux/store';
import { Main } from './Main';

const AppRoot = () => {
  const store = configureStore();
  return (
    <ReduxProvider store={store}>
        <Main/>
    </ReduxProvider>
  )
}

export default AppRoot