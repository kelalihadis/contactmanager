
import React, { Component } from 'react';
import  {HashRouter as Router,Route,Switch} from 'react-router-dom'; 
import './App.css';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import EditContact from './components/contacts/EditContact';
import Header from './components/layouts/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/pages/Test';
import { Provider } from './context';


 class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
   <div className="App">
   <Header heading=" Contact Manager"/>
     <div className="container">
       <Switch>
         <Route exact path='/' component={Contacts}/>
         <Route exact path='/contact/add' component={AddContact}/>
         <Route exact path='/contact/edit/:id' component={EditContact}/>
         <Route exact path='/about' component={About}/>
         <Route exact path='/test' component={Test}/>
         <Route component={NotFound}/>
       </Switch>
       </div>
      </div>
        </Router>

    </Provider>
    )
  }
}


export default App;
