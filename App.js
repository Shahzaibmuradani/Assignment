import React from 'react';
import StackNavigator from './src/navigator';

/* Store */
import {Provider} from 'react-redux';
import {store, persister} from './src/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <StackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
