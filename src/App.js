import './App.css';
import { Switch, Route } from 'react-router-dom';


// components
import TopBar from './components/topbar/TopBar';
// pages
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Public from './routes/Public';
import Private from './routes/Private';
import Home from "./pages/Home/Home"
import Write from './pages/write/Write';

function App() {
  return (<>
      <TopBar />
        <Switch>
          <Private path='/' component ={Home} exact />
          <Public path='/login'  component={Login}  />
          <Public path='/register'  component={Signup} />
          <Private path="/write" component={Write}/>
        </Switch>
  </>
   
  );
}

export default App;
