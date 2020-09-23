import React from 'react';
import LoginNavigator from './screens/loginNavigator'
import { store } from './stateManager/store'
import { Provider } from 'react-redux';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <LoginNavigator></LoginNavigator>
      </Provider>
    </>
  );
}

export default App;