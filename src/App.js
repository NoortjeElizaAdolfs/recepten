import Navbar from "./Navbar";
import Home from "./pages/Home";
import Recepten from "./pages/Recepten";
import Inspiratie from "./pages/Inspiratie";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import {Route, Routes} from "react-router-dom";



function App() {


return (
<>
<Navbar />
<div className="container">
  <Routes>
    <Route path= "/" element={ <Home />} />
    <Route path= "/recepten" element={ <Recepten />} />
    <Route path= "/inspiratie" element={ <Inspiratie />} />
    <Route path= "/about" element={ <About />} />
    <Route path= "/login" element={ <Login />} />
    <Route path= "/signup" element={ <Signup />} />
    <Route path= "/profile" element={ <Profile />} />
    
  </Routes>
</div>
</>
)
}

export default App;