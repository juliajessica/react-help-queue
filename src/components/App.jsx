import React from 'react';
import Header from './Header/Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterTicketLit: []
    };
  }
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={TicketList} />
          <Route path='/newTicket' component={NewTicketControl} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
