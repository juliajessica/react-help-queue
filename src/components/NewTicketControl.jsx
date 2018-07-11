import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false //local state
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  } //binding this method to state

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  } //EVENT HANDLER func to change state

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewTicketControl;
