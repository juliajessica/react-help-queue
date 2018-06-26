import React from 'react';
import Header from './Header/Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newTicket' component={NewTicketForm} />
      </Switch>
    </div>
  );
}

export default App;


// function liveTime(){
// let clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);

// }

// setInterval(liveTime, 1000);
