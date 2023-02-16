import './App.css';
import Navigation from './Routes/navigation/Navigation';
import Menu from '../src/Routes/Menu/Menu';
import Checkout from './Routes/Checkout/Checkout';

import Authentication from './Components/Authentication/Authentication';
import Home from '../src/Routes/Home/Home';
import { Route, Routes, Outlet } from 'react-router-dom';
import { ToogleContext, ToogleProvider } from './Context/tooglemode.context';
import { useContext } from 'react';
import { useEffect } from 'react';
import { SignInAuthUserWithEmailAndPassword } from './utils/firebase/firebase.utils';
import Signup from './Components/sign-up/sign-up';


function App() {

  const { darkmode } = useContext(ToogleContext)


  return (
    <>



      <div className="App">
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index path='/' element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='signout' element={<Signup />} />


            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </div>


    </>

  );
}

export default App;
