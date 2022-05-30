import React from 'react';
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration";
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route/>
              {/*<Authorization/>*/}
              {/*<Registration/>*/}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
