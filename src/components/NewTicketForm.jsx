import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import c from './../constants';

function NewTicketForm(props){
  // console.log(props);
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();

    const action = {
      type: c.ADD_TICKET,
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
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

NewTicketForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewTicketForm);
