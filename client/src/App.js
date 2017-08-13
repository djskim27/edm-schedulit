import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from './components/Homepage';
import Show from './components/Show';

class App extends Component {
  render() {
    return (

    <Router>
      <div>
        <div>
          <Link to="/">Go Home</Link>
        </div>
        <div>
          <Route exact path="/" component={Homepage}/>
          <Route path="/:showId" component={Show}/>
        </div>
        </div>
    </Router>
     
       
   
  
    );
  }
}

export default App;
