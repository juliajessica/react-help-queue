import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Moment from 'moment';

function Ticket(props){
  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TICKET',
      ticketId: ticketId
    };
    dispatch(action);
  }

  const ticketInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>


      <style jsx>{`
        div {
          background-color: #ecd7ef;
        }
      `}</style>
    </div>;


  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
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
  currentRouterPath: PropTypes.string,
  dispatch: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);


//currentRouterPath={props.currentRouterPath} informs if and when the app is rendered
