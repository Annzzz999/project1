import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch , Route  } from 'react-router-dom';
import App from './App';

import Home from './Pages/Home.jsx';
import Rep1 from './Pages/Rep1'; 
import Rep2 from './Pages/Rep2';
import Rep3 from './Pages/Rep3';
import Rep4 from './Pages/Rep4';
import Rep5 from './Pages/Rep5';

ReactDOM.render((
        
<BrowserRouter>
<App>
<Switch>
{/* <Route exact path='/' component={Home}/> */}
<Route path='/Rep1' component={Rep1}/>  
<Route path='/Rep2' component={Rep2}/> 
<Route path='/Rep3' component={Rep3}/> 
<Route path='/Rep4' component={Rep4}/> 
<Route path='/Rep5' component={Rep5}/> 

</Switch>
        </App>
 
 
        
        </BrowserRouter>
), 
document.getElementById('root'));
function deleteBlock (i) {
        var arr = this.this.state.tasks;
        arr.splice(i,1); // сколько удалять
        this.setState({tasks:arr})};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()