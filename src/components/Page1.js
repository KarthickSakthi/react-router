import React from 'react'
import { Link ,Switch,Route} from 'react-router-dom';
import About from './Page2'
import Joinus from './Page3'
import Routing from './Routing';

export default function Page1(){
return(<div>
    <h1>Youre in Page1</h1>
    
    <Link to="/Page2"  target="_blank" >Page2</Link>
    
    </div>
);
}

