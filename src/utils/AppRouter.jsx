import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SelectShop from '../pages/SelectShop';
import Results from '../pages/Results';
import SelectSnack from '../pages/SelectSnack';
import NavBar from '../components/NavBar';

function AppRouter() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = '/SelectShop' element={<SelectShop/>}/>
          <Route path = '/Results' element={<Results/>}/>
          <Route path = '/SelectSnack' element={<SelectSnack/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;