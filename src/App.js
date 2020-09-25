import React , {Component} from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import Nav from './components/Nav'
import Register  from './components/register';
import Login  from './components/login';
import Detail from './components/Detail';
import Home from './components/Home';
import Demandelo from './components/Demandelo'
import Proposelo from './components/Proposelo'
import "./components/App.css";
import Mylocation from './components/Mylocation'
import TotalLocation from './components/TotalLocation';
import Show from './components/Show';
import Edit from './components/Edit';
import Upload from './components/Upload';
import Productbycat from './components/Productbycat';
import Cordonnes from './components/Cordonnes';
import Chat from './components/Chat';
import Message from './components/Message';

// import InitialFocus from './components/InitialFocus'

class App extends Component {
render() {
  return (
    <Router>
    <div className="App">
       <Nav />

       
       <Route exact path="/" component={Home} /> 
       <Route exact path="/show:id" component={Show} /> 
       <Route exact path="/demandelo" component={Demandelo} />
       <Route exact path="/message" component={Message} />
       <Route exact path="/upload" component={Upload} />
       <Route exact path="/chat:id" component={Chat} />
       <Route exact path="/proposelo" component={Proposelo} />
       <Route exact path="/productbycat:id" component={Productbycat} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/detail" component={Detail} />
       <Route exact path="/totallocation" component={TotalLocation} />
       <Route exact path="/cordonnes" component={Cordonnes} />
       <Route exact path="/mylocation" component={Mylocation} />
       <Route exact path="/mylocation/edit/:id" component={Edit} />
      
    </div>
    </Router >
   
  )
}

}
export default App 
