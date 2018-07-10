import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';

function NewTicketForm(props){
  // console.log(props);
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();

    const { dispatch } = props;
    const action = {
      type: 'ADD_TICKET',
      id: null,
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment()
    };
    dispatch(action);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  } //This method gathers all ticket data & provides it to the onNewTicketCreation() function.
  //EVENT HANDLER: you have to add 'function' to this event handler because it's not a class based compnent.

  // added another key-value pair to the info we're passing to our callback method

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default connect()(NewTicketForm);
