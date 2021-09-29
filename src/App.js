import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import {selectUserName} from './features/user/userSlice'
import {useSelector} from 'react-redux'
function App() {
  const name=useSelector(selectUserName)
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
         
          <Route path="/detail::id">
            <Detail />
          </Route>
        {name?<Route path="/">
            <Home />
          </Route>
          :
          <Route path="/">
          <Login/>
         </Route>
        }
          

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
