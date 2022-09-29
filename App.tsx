import React from 'react';
import {store} from './src/Redux/store';
import {Provider} from 'react-redux';

//user-define Import files
import Navigator from './src/Navigation/navigator';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
