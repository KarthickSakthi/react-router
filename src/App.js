
import './App.css';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom'
import Home from './components/Page1'
import About from './components/Page2'
import Joinus from './components/Page3'
import NotFound from './NotFound'

function App(){
  return (
    <div className="App">
      <Router>
        <h1>Working with React Router</h1>
        <h3>NavLink Example</h3>
        <ul>
           <li>
             <NavLink to='/' exact activeStyle={{color:"red"}}>Home</NavLink>
           </li>
           <li>
           <NavLink to='/about' exact activeStyle={{color:"red"}}>About</NavLink>
           </li>
           <li>
           <NavLink to='/Joinus' exact activeStyle={{color:"red"}}>Joinus</NavLink>
           </li>
         </ul>
        <h3>Link Example</h3>
         <ul>
           <li>
             <Link to='/'>Page1</Link>
           </li>
           <li>
             <Link to='/Page2'>Page2</Link>
           </li>
           <li>
             <Link to='/Page3'>Page3</Link>
           </li>
         </ul>
        
        
      </Router>
    </div>
  );
}

export default App;
