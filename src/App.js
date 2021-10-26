import './App.css';
import {BrowserRouter as  Router,Route,Switch} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar'
import Contact from './component/Contact';
import Error from './component/Error'
import Post from './component/Post';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={About} path="/about" exact/>
          <Route component={Contact} path="/contact" exact/>
          <Route component={Post} path="/post/:category" exact/>
          <Route component={Post} path="/post/:category/:id" exact/>

          <Route  component={Error}/>

        </Switch>
      </Router>
  );
}

export default App;
