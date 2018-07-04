import React from 'react';
import Header from './Header/Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }//this is application state

  //implementing a lifecycle
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    5000
    );
  }//instruct React to create a setInterval() timer named waitTimeUpdateTimer when our App component first mounts. what runs code to update elapsed wait times for each ticket in regular intervals. it runs a method called updateTicketElapsedWaitTime() every five seconds.

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  } //halting waitTimeUpdateTimer like this: clean up after the timers created - it prevents "old" timers from running in the background and slowing our app.

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }//slice() to create a copy of our masterTicketList array called newMasterTicketList. Add formattedWaitTime value to each ticket in this copy. Set it = to Moment.js-formatted elapsed wait time. (ie: "A minute ago" or "five minutes ago"). Reset masterTicketList state to the updated array using setState(). Logging the word "check" to the console every time the method runs, so we can confirm it's working.

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }//callback function

  handleChangingSelectedTicket(ticket){
    this.setState({selectedTicket: ticket});
  }//callback function

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />//passing lifted state
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />//passing callback from parent to child
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}//currentRouterPath={props.location.pathname} is allowing you to retrieve the Current Route from React-Router Props (captured & pass the user's current route from React-Router)
export default App;
