import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
        <Switch>

       </Switch>

      // <TicketList />
    </div>
  );
}

export default App;


// function liveTime(){
// let clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);

// }

// setInterval(liveTime, 1000);
