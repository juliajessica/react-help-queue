import React from 'react';
import Header from './Header/Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Admin from './Admin';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      selectedTicket: null
    };
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
    // var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
    //console.log(this.state);
  }//callback function - adding new tickets into the selected ticket state

  render(){
    //console.log(this.state.masterTicketList);
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>
            <TicketList ticketList={this.props.masterTicketList} />} />//passing lifted state
          <Route path='/newticket' render={()=>
            <NewTicketControl />} />//passing callback from parent to child
          <Route path='/admin' render={(props)=>
            <Admin ticketList={this.props.masterTicketList}
              currentRouterPath={props.location.pathname}
              onTicketSelection={this.handleChangingSelectedTicket}
              selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state
  };
};//retrieves state info and match those state values to their corresponding React props!
export default withRouter(connect(mapStateToProps)(App));

///currentRouterPath={props.location.pathname} is allowing you to retrieve the Current Route from React-Router Props (captured & pass the user's current route from React-Router)
