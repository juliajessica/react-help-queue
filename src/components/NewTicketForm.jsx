import React from 'react';

function NewTicketForm(){

  function handleNewTicketFormSubmission(event){
    event.preventDefault();
  } //EVENT HANDLER: you have to add 'function' to this event handler because it's not a class based compnent. - we call event.preventDefault(); to prevent the form submission from attempting an HTTP GET reques

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) =>{_names = input;}}/>
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

export default NewTicketForm;
