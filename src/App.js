import React,  {Fragment} from 'react';

import AppHeader from './Components/Header';


const App = ({ children }) => (

  <Fragment >
   <AppHeader
        //OnLeftIconClick = {() =>this.setState({isDrawerOpen:true})}
        />
  {children}
  </Fragment>
  
  );

  
  export default App;

    
    
   
    

