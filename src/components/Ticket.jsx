import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  return(
    const ticketInformation = <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <p><em>{props.issue}</em></p>
      <hr/>

      <style jsx>{`
        div {
          background-color: #ecd7ef;
        }
      `}</style>
    </div>;


  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {alert('hey, you just clicked the ticket belonging to ' + props.names);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
}; //currentRouterPath={props.currentRouterPath} informs if and when the app is rendered

export default Ticket;
