import React, { useContext, useEffect } from 'react';
import Routing from './router/Routing';
import { UserAuth } from './context/UserDataContext';
import { getItemWithExpiry } from './utils/LocalStorageManagment';
import { SESSION } from './constant/UserSession';


const App = () => {

  const {user, sigIn} = useContext(UserAuth);

  useEffect(()=> {
    if(!user) {
      sigIn(getItemWithExpiry(SESSION.USER));
    }
  }, [user, getItemWithExpiry(SESSION.USER)]);

  return (
    <Routing />
  );  
}

export default App;
