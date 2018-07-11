import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  //console.log(props.ticketList);
  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          ticketId={ticketId} />;
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default TicketList;
//NOTES:

//maping the state of the array
// {props.ticketList.map((ticket) =>
//   <Ticket
//     names={ticket.names}
//     location={ticket.location}
//     issue={ticket.issue}
//     formattedWaitTime={ticket.formattedWaitTime}
//     currentRouterPath={props.currentRouterPath}
//     onTicketSelection={props.onTicketSelection}
//     key={ticket.id} />
// )}

//currentRouterPath={props.currentRouterPath} informs if and when the app is rendered

//key={ticket.id} -use our tickets' unique identifiers as the key values when we loop through all tickets
