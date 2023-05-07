import React, {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import Home from "./pages/Home";
import Recepten from "./pages/Recepten";
import Inspiratie from "./pages/Inspiratie";
import Mood from "./pages/Mood";
import Profile from "./pages/Profile";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import TopMenu from "./components/Navbar";
import Signup from "./pages/Signup";

function App() {

    const { isAuth } = useContext(AuthContext);

  return (
      <>
          <TopMenu />
          <Switch>
              <Route exact path="/" component={Home} /> 
              <Route exact path="/recepten" component={Recepten} />
              <Route exact path="/inspiratie" component={Inspiratie} />
              <Route exact path="/mood" component={Mood} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              {isAuth ? <Route exact path="/profile" component={Profile}/> : <Route exact path="/" component={Home}/>}
          </Switch>
</>
  );
}

export default App;
